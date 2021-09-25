# Fireheet Entities <a><img src="https://img.shields.io/badge/v0.0.4-red"/></a>

<a href="https://typeorm.io/#/"><img src="https://img.shields.io/badge/typeorm-v0.2.37-green"/></a>
<a href="https://typeorm.io/#/"><img src="https://img.shields.io/badge/typescript-v4.3.2-green"/></a>

*This package was created for a personal project*, **you can use it any way you like.**

The folder structure was made to separate different ORM's, and also for different services.
```
# Note that in all ORM's the entity fields are the same
```
---

## Modules

#### Users
|         	|Typeorm  |
|---------	|---------|
| Role    	|&#9745;  |
| User    	|&#9745;  |
| Address   |&#9745;  |
| Phone     |&#9745;  |

<a href="https://app.swaggerhub.com/apis-docs/fireheet/entities/0.1.0#/">Users entities documentation</a>
  
---
*To use this module, just import in your services or repository and use it as you like*

Example in NestJS:
```
import { User } from '@fireheet/entities/typeorm/users';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, UsersRepository, ...]),
  ],
  controllers: [UsersController, ...],
  providers: [
    ...
  ],
  exports: [TypeOrmModule],
})
export default class UsersModule {}
```
