
create table STAFF
(
    STAFF_ID VARCHAR(64) not null,
    NAME VARCHAR(64) not null,
    GENDER INT,
    STATE INT,
    PHONE VARCHAR(64),
    EMAIL VARCHAR(64),
    ORGANIZATION_ID VARCHAR(64),
    constraint PK_STAFF primary key (STAFF_ID)
);

create table ORGANIZATION
(
   ORGANIZATION_ID      VARCHAR(64)        not null,
   NAME                 VARCHAR(128)        not null,
   DESCRIPTION          VARCHAR(256),
   STATE                INT,
   NODE_LEVEL           INT,
   UPDATE_TIME          DATE                 not null,
   UPDATE_USER          VARCHAR(64)        not null,
   PARENT_ID            VARCHAR(64),
   constraint PK_ORGANIZATION primary key (ORGANIZATION_ID)
);
insert into ORGANIZATION (ORGANIZATION_ID, NAME, NODE_LEVEL, PARENT_ID, STATE)
values ('-1','陕西国防工业职业技术学院',0,-1,0);

create table ROLE
(
   ROLE_ID              VARCHAR(64)        not null,
   NAME                 VARCHAR(128)        not null,
   STATE                INT,
   UPDATE_TIME          DATE,
   UPDATE_USER          VARCHAR(128),
   SYSTEM_ID            VARCHAR(1024),
   DESCRIPTION          VARCHAR(256),
   constraint PK_TAI_GFXY_ROLE primary key (ROLE_ID)
);

create table USER
(
   USER_ID              VARCHAR(64)        not null,
   LOGIN_NAME           VARCHAR(64)         not null,
   STAFF_ID             VARCHAR(64),
   ROLE_ID              VARCHAR(64),
   ORGANIZATION_ID      VARCHAR(64),
   PASSWORD             VARCHAR(128),
   STATE                INT,
   LOGIN_SOURCE         INT,
   USEFUL_TIME          DATE,
   LAST_3PWDS           VARCHAR(1024),

   constraint PK_USER primary key (USER_ID),
   constraint FK_USER_STAFF foreign key (STAFF_ID) references STAFF(STAFF_ID),
   constraint FK_USER_ORGANIZATION foreign key (ORGANIZATION_ID) references ORGANIZATION(ORGANIZATION_ID)
   constraint FK_USER_ROLE foreign key(ROLE_ID) references ROLE(ROLE_ID)
);


create table ROLE_RESOURCES
(
   REL_ID               VARCHAR(64)         not null,
   ROLE_ID              VARCHAR(64),
   TYPE                 int,
   RESOURCE_ID          VARCHAR(64),
   constraint PK_RE_ROLE_RESOURCES primary key (REL_ID)
);

create
    definer = root@`%` function getChildrenMenu(menuId varchar(64)) returns varchar(4000)
BEGIN
DECLARE sTemp VARCHAR(4000);
DECLARE sTempChd VARCHAR(4000);

SET sTemp = '$';
SET sTempChd = menuId;

WHILE sTempChd IS NOT NULL DO
SET sTemp= CONCAT(sTemp,',',sTempChd);
SELECT GROUP_CONCAT(ID) INTO sTempChd FROM APP_TREE WHERE FIND_IN_SET(PARENT_ID,sTempChd)>0;
END WHILE;
RETURN sTemp;
END;

create table APP_BUTTON
(
   ID                   VARCHAR(64)   not null  comment '主键',
   APP_ID               VARCHAR(64)             comment '菜单ID',
   BTN_ID               VARCHAR(64)             comment '按钮ID',
   BTN_NAME             VARCHAR(1024)             comment '按钮显示字符',
   constraint PK_APP_BUTTON primary key (ID)
) comment ='按钮表';