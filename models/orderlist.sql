CREATE TABLE cafesystem.orderlist (
    custid INT NOT NULL,
    menuid INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    ordertime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    orderstate TINYINT NOT NULL DEFAULT 0,
    PRIMARY KEY(custid, menuid),
    CONSTRAINT custid FOREIGN KEY (custid) REFERENCES umcafe.customer (custid)
    ON DELETE NO ACTION,
    CONSTRAINT menuid FOREIGN KEY (menuid) REFERENCES umcafe.menu (menuid)
    ON DELETE NO ACTION)
    COMMENT = '주문 정보'
    DEFAULT CHARSET=UTF8MB4
    ENGINE=InnoDB;