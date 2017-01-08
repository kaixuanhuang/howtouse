grant select,insert,update,delete on *.* to  test1@localhost Identified by "123456";
#CREATE DATABASE DEMOS;
USE DEMOS;


CREATE  TABLE CUSTOMER
 (
      C_ID                      INT  NOT NULL ,
      FIRSTNAME           VARCHAR(10),
      LASTNAME           VARCHAR(10),
      DISPLAY_NAME    VARCHAR(10),
      PHONE               VARCHAR(10),
      EMAIL                VARCHAR(19),
      CITY                  VARCHAR(10),
      STATE                VARCHAR(10),
      ZIP                  VARCHAR(10),
      COUNTRY           VARCHAR(10)
)

ALTER TABLE CUSTOMER ADD PRIMARY KEY PK_CUSTOMER(C_ID);
ALTER TABLE CUSTOMER MODIFY COLUMN C_ID INT AUTO_INCREMENT ;

SHOW GLOBAL VARIABLES LIKE 'PORT';    //default 3306

then set .env  your db paramter