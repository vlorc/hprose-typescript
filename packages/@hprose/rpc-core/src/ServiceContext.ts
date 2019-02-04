/*--------------------------------------------------------*\
|                                                          |
|                          hprose                          |
|                                                          |
| Official WebSite: https://hprose.com                     |
|                                                          |
| ServiceContext.ts                                        |
|                                                          |
| ServiceContext for TypeScript.                           |
|                                                          |
| LastModified: Jan 27, 2019                               |
| Author: Ma Bingyao <andot@hprose.com>                    |
|                                                          |
\*________________________________________________________*/

import { Context } from './Context';
import { Service } from './Service';
import { MethodLike } from './Method';

export class ServiceContext extends Context {
    public method!: MethodLike;
    constructor(public readonly service: Service) { super(); }
}