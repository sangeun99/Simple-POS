CREATE TABLE cafesystem.menu (
    menuid INT NOT NULL AUTO_INCREMENT,
    menutype TINYINT NOT NULL DEFAULT 1,
    menuname VARCHAR(20) NOT NULL,
    price INT NOT NULL,
    imageurl VARCHAR(50),
    firstmade DATE NOT NULL,
    menustate TINYINT NOT NULL DEFAULT 0,

    PRIMARY KEY(menuid),
    INDEX type_idx (menutype ASC))

    COMMENT = '주문 정보'
    DEFAULT CHARSET=UTF8MB4
    ENGINE=InnoDB;