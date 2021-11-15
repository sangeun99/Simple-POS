CREATE TABLE cafesystem.customer (
    custid INT NOT NULL,
    phonenum VARCHAR(15) NOT NULL,
    firstvisit DATE NOT NULL,
    PRIMARY KEY(custid))
    COMMENT = '고객 정보'
    DEFAULT CHARSET=UTF8MB4
    ENGINE=InnoDB;