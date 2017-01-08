/**
 * Created by huangsihuan on 2017/1/7.
 */
'use strict'
import { Observable } from 'rxjs/Observable'
import { Fetch } from '../utils/Fetch'
import forEach from 'lodash/forEach'

export default class BaseFetch {
    static fetch = new Fetch()

    constructor() {
        this.fetch = BaseFetch.fetch
    }

    checkQuery(query) {
        forEach(query, (val, key) => {
            if (typeof val === 'undefined') {
                delete query[key]
            }
        })
        if (!Object.keys(query).length) {
            return null
        }
        return query
    }
}


const _requestCache = new Map()

const _allowedMethod = ['get', 'post', 'put', 'delete']
_allowedMethod.forEach(httpMethod => {
    BaseFetch.fetch.middleware(httpMethod, args => {
        const namespace = args.url + JSON.stringify(args.queryOrBody)
        const cache = _requestCache.get(namespace)
        if (cache) return cache
        else {
            let result
            const now = Date.now()
            if (httpMethod === 'get') {
                if (args.queryOrBody) args.queryOrBody._ = now
                else args.queryOrBody = {_: now}

                result = args.originFn(args.url, args.queryOrBody)
                    .map(r => {
                        _requestCache.delete(namespace)
                        if (httpMethod === 'get' && args.queryOrBody) {
                            if (Array.isArray(r)) {
                                forEach(r, ele => ele._requested = now)
                            } else {
                                r._requested = now
                            }
                        }
                        return r
                    })
                    ._catch(e => {
                        _requestCache.delete(namespace)
                        return Observable.throw(e)
                    })
                    .publishReplay(1)
                    .refCount()

                _requestCache.set(namespace, result)
                return result
            }else{
                result = args.originFn(args.url, args.queryOrBody)
                    .map(r => {
                        if (args.queryOrBody) {
                            if (Array.isArray(r)) {
                                forEach(r, ele => ele._requested = now)
                            } else {
                                r._requested = now
                            }
                        }
                        return r
                    })
                    ._catch(e => {
                        return Observable.throw(e)
                    })
                    .publishReplay(1)
                    .refCount()

                return result
            }
        }
    })

})
