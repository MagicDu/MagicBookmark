### 数据库表设计

#### admin（管理员）

|    属性    |      类型      | 能否为空 |  描述  | 默认值  |
| :------: | :----------: | :--: | :--: | ---- |
|    id    | varchar(255) |  N   |  主键  |      |
|   name   | varchar(50)  |  N   | 登录名  |      |
| password | varchar(200) |  N   |  密码  |      |
|  email   | varchar(200) |  N   |  邮箱  |      |


#### users (用户)

|     属性     | 类型           | 能否为空 |  描述  | 默认值  |
| :--------: | ------------ | :--: | :--: | ---- |
|     id     | varchar(255) |  N   |  主键  |      |
|    name    | varchar(50)  |  N   | 登录名  |      |
|  password  | varchar(200) |  N   |  密码  |      |
|   email    | varchar(200) |  N   |  邮箱  |      |
|  nickname  | varchar(200) |  Y   |  昵称  |      |
|   avatar   | varchar(255) |  Y   | 头像地址 |      |
| activecode | varchar(255) |  N   | 激活码  |      |
|   state    | int          |  N   | 账户状态 | 0    |

#### bookmarks（书签）
|     属性      | 类型           | 能否为空 |  描述   | 默认值   |
| :---------: | ------------ | :--: | :---: | ----- |
|     id      | varchar(255) |  N   |  主键   |       |
|   user_id   | varchar(200) |  N   |  外键   |       |
|    name     | varchar(50)  |  N   |  书签名  |       |
|     url     | varchar(255) |  N   | 书签url |       |
| category_id | varchar(200) |  N   |  分类   |       |
| description | varchar(200) |  Y   | 书签描述  |       |
|    state    | int          |  N   | 书签状态  | 0（公开） |

#### category（分类）
|   属性    |      类型      | 能否为空 |  描述  | 默认值  |
| :-----: | :----------: | :--: | :--: | ---- |
|   id    | varchar(255) |  N   |  主键  |      |
| user_id | varchar(255) |  N   |  外键  |      |
|  name   | varchar(200) |  N   | 分类名  |      |



