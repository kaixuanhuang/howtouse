/**
 * Created by huangsihuan on 2017/1/7.
 */

import 'isomorphic-fetch'
import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/operator/debounceTime'
import { AjaxError } from 'rxjs/observable/dom/AjaxObservable'
import { Observable } from 'rxjs/Observable'
import { Observer } from 'rxjs/Observer'
import { Subject } from 'rxjs/Subject'

import forEach from 'lodash/forEach'
import assign from 'lodash/assign'

/**
 * refer to https://github.com/github/fetch/blob/v1.0.0/fetch.js#L313
 * XmlHttpRequest's getAllResponseHeaders() method returns a string of response
 * headers according to the format described here:
 * http://www.w3.org/TR/XMLHttpRequest/#the-getallresponseheaders-method
 * This method parses that string into a user-friendly key/value pair object.
 */
export function parseHeaders(rawHeader) {
    const head = Object.create(null)
    const pairs = rawHeader.trim().split('\n')
    pairs.forEach(function(header) {
        const split = header.trim().split(':')
        const key = split.shift().trim()
        const value = split.join(':').trim()
        head[key] = value
    })
    return head
}

const _meta = {
    UseXMLHTTPRequest: true
}

const allowedHttpMethod = ['get','post','put','delete']
// Observable<HttpErrorMessage>
// HttpErrorMessage {
//     method: AllowedHttpMethod
//     url: string
//     error: Response
//     body?: any
// }

export const HttpError$= new Subject()
export class Fetch{

    _opts = {
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        credentials:'include'
    }

    _apiHost = ' http://192.168.1.104:3080/'

    getApiHost(){
        return _apiHost
    }

    setApiHost(host){
        this._apiHost = host
    }

    setHeaders(headers){
        assign(this._opts.headers, headers)
    }

    setToken(token){
        delete this._opts.credentials
        this._opts.headers.Authorization = `Oauth2 ${token}`
    }

    setOpts(opts) {
        assign(this._opts, opts)
    }

    restore(){
        this._opts = {
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            credentials:'include'
        }
    }

    //decorator  {url,orifn(url,query|body):Obserable , query|Body,
    middleware(method,decorator){
        if(allowedHttpMethod.indexOf(method) === -1){
            throw new Error(`not  allowed method`)
        }
        const originMethod = this[method]
        this[method] = function(url,queryOrBody){
            const calledArgs = {
                url,
                queryOrBody,
                originFn:originMethod.bind(this)
            }

            return decorator(calledArgs)
        }

    }



    get(url,query){
        return this.createMethod('get')(url,query)
    }

    post(url,body){
        debugger
        return this.createMethod('post')(url,body)
    }

    put(url,body){
        return this.createMethod('put')(url,body)
    }

    delete(url){
        return this.createMethod('delete')(url)
    }



     _buildQuery =(url, query) =>{
        if (typeof query !== 'object' || !query) {
            return url
        }
        let result = []
        forEach(query, (val, key) => {
            if (Array.isArray(val)) {
                val.forEach(val => {
                result.push(`${key}=${val}`)
            })} else {
                result.push(`${key}=${val}`)
            }
        })
        let _query
        if (url.indexOf('?') !== -1) {
                _query = result.length ? '&' + result.join('&') : ''
        } else {
                _query = result.length ? '?' + result.join('&') : ''
        }
            return url + _query
    }


    createMethod(method){
        return (url, body)=> {
            debugger
           if (_meta.UseXMLHTTPRequest && typeof window !== 'undefined') {

               return Observable.ajax({
                   url: this._apiHost + url,
                   body, method,
                   headers: this._opts.headers,
                   withCredentials: this._opts.credentials === 'include',
                   responseType: this._opts.responseType || 'json',
                   crossDomain: typeof this._opts.crossDomain !== 'undefined' ? !!this._opts.crossDomain : true
               })
                   .map(value => {
                       const resp = value.response
                       try {
                           return JSON.parse(resp)
                       } catch (e) {
                           return resp
                       }
                   })
                   .catch((e) => {
                       const headers = e.xhr.getAllResponseHeaders()
                       const sdkError = {
                           error: new Response(new Blob([JSON.stringify(e.xhr.response)]), {
                               status: e.xhr.status,
                               statusText: e.xhr.statusText,
                               headers: headers.length ? new Headers(parseHeaders(headers)) : new Headers()
                           }),
                           method, url, body
                       }
                       setTimeout(() => {
                           HttpError$.next(sdkError)
                       }, 10)
                       return Observable.throw(sdkError)
                   })
                } else {

            return Observable.create((observer) => {
                const options = assign({
                    method: method
                }, this._opts)

                if (body) {
                    options.body = typeof body === 'object' ? JSON.stringify(body) : body
                }
                fetch(this._apiHost + url, options)
                    .then((response) => {
                        if (response.status >= 200 && response.status < 400) {
                            return response.text()
                        } else {
                            throw response
                        }
                    })
                    .then(r => {
                        try {
                            const result = JSON.parse(r)
                            observer.next(result)
                        } catch (e) {
                            observer.next(r)
                        }
                        observer.complete()
                    })
                    .catch((e) => {
                        const sdkError = {
                            error: e,
                            method, url, body
                        }
                        setTimeout(() => {
                            HttpError$.next(sdkError)
                        }, 10)
                        observer.error(sdkError)
                    })
            })
           }
        }
     }

}
