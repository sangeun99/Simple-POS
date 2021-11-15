CREATE TABLE cafesystem.menutype (
    typeid TINYINT NOT NULL,
    menutype VARCHAR(10) NOT NULL,

    PRIMARY KEY(typeid),
    CONSTRAINT typeid FOREIGN KEY (typeid) REFERENCES umcafe.menu (menutype)
    ON DELETE NO ACTION)

    COMMENT = '종류 정보'
    DEFAULT CHARSET=UTF8MB4
    ENGINE=InnoDB;