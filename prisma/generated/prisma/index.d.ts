
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Coords
 * 
 */
export type Coords = $Result.DefaultSelection<Prisma.$CoordsPayload>
/**
 * Model LeaderBoard
 * 
 */
export type LeaderBoard = $Result.DefaultSelection<Prisma.$LeaderBoardPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Coords
 * const coords = await prisma.coords.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Coords
   * const coords = await prisma.coords.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.coords`: Exposes CRUD operations for the **Coords** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coords
    * const coords = await prisma.coords.findMany()
    * ```
    */
  get coords(): Prisma.CoordsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaderBoard`: Exposes CRUD operations for the **LeaderBoard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaderBoards
    * const leaderBoards = await prisma.leaderBoard.findMany()
    * ```
    */
  get leaderBoard(): Prisma.LeaderBoardDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Coords: 'Coords',
    LeaderBoard: 'LeaderBoard'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "coords" | "leaderBoard"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Coords: {
        payload: Prisma.$CoordsPayload<ExtArgs>
        fields: Prisma.CoordsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoordsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoordsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordsPayload>
          }
          findFirst: {
            args: Prisma.CoordsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoordsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordsPayload>
          }
          findMany: {
            args: Prisma.CoordsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordsPayload>[]
          }
          create: {
            args: Prisma.CoordsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordsPayload>
          }
          createMany: {
            args: Prisma.CoordsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoordsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordsPayload>[]
          }
          delete: {
            args: Prisma.CoordsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordsPayload>
          }
          update: {
            args: Prisma.CoordsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordsPayload>
          }
          deleteMany: {
            args: Prisma.CoordsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoordsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoordsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordsPayload>[]
          }
          upsert: {
            args: Prisma.CoordsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoordsPayload>
          }
          aggregate: {
            args: Prisma.CoordsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoords>
          }
          groupBy: {
            args: Prisma.CoordsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoordsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoordsCountArgs<ExtArgs>
            result: $Utils.Optional<CoordsCountAggregateOutputType> | number
          }
        }
      }
      LeaderBoard: {
        payload: Prisma.$LeaderBoardPayload<ExtArgs>
        fields: Prisma.LeaderBoardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaderBoardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaderBoardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>
          }
          findFirst: {
            args: Prisma.LeaderBoardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaderBoardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>
          }
          findMany: {
            args: Prisma.LeaderBoardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>[]
          }
          create: {
            args: Prisma.LeaderBoardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>
          }
          createMany: {
            args: Prisma.LeaderBoardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaderBoardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>[]
          }
          delete: {
            args: Prisma.LeaderBoardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>
          }
          update: {
            args: Prisma.LeaderBoardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>
          }
          deleteMany: {
            args: Prisma.LeaderBoardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaderBoardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaderBoardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>[]
          }
          upsert: {
            args: Prisma.LeaderBoardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderBoardPayload>
          }
          aggregate: {
            args: Prisma.LeaderBoardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaderBoard>
          }
          groupBy: {
            args: Prisma.LeaderBoardGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaderBoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaderBoardCountArgs<ExtArgs>
            result: $Utils.Optional<LeaderBoardCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    coords?: CoordsOmit
    leaderBoard?: LeaderBoardOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Coords
   */

  export type AggregateCoords = {
    _count: CoordsCountAggregateOutputType | null
    _avg: CoordsAvgAggregateOutputType | null
    _sum: CoordsSumAggregateOutputType | null
    _min: CoordsMinAggregateOutputType | null
    _max: CoordsMaxAggregateOutputType | null
  }

  export type CoordsAvgAggregateOutputType = {
    xMin: number | null
    xMax: number | null
    yMin: number | null
    yMax: number | null
  }

  export type CoordsSumAggregateOutputType = {
    xMin: number | null
    xMax: number | null
    yMin: number | null
    yMax: number | null
  }

  export type CoordsMinAggregateOutputType = {
    id: string | null
    character: string | null
    xMin: number | null
    xMax: number | null
    yMin: number | null
    yMax: number | null
  }

  export type CoordsMaxAggregateOutputType = {
    id: string | null
    character: string | null
    xMin: number | null
    xMax: number | null
    yMin: number | null
    yMax: number | null
  }

  export type CoordsCountAggregateOutputType = {
    id: number
    character: number
    xMin: number
    xMax: number
    yMin: number
    yMax: number
    _all: number
  }


  export type CoordsAvgAggregateInputType = {
    xMin?: true
    xMax?: true
    yMin?: true
    yMax?: true
  }

  export type CoordsSumAggregateInputType = {
    xMin?: true
    xMax?: true
    yMin?: true
    yMax?: true
  }

  export type CoordsMinAggregateInputType = {
    id?: true
    character?: true
    xMin?: true
    xMax?: true
    yMin?: true
    yMax?: true
  }

  export type CoordsMaxAggregateInputType = {
    id?: true
    character?: true
    xMin?: true
    xMax?: true
    yMin?: true
    yMax?: true
  }

  export type CoordsCountAggregateInputType = {
    id?: true
    character?: true
    xMin?: true
    xMax?: true
    yMin?: true
    yMax?: true
    _all?: true
  }

  export type CoordsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coords to aggregate.
     */
    where?: CoordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coords to fetch.
     */
    orderBy?: CoordsOrderByWithRelationInput | CoordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coords
    **/
    _count?: true | CoordsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoordsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoordsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoordsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoordsMaxAggregateInputType
  }

  export type GetCoordsAggregateType<T extends CoordsAggregateArgs> = {
        [P in keyof T & keyof AggregateCoords]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoords[P]>
      : GetScalarType<T[P], AggregateCoords[P]>
  }




  export type CoordsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoordsWhereInput
    orderBy?: CoordsOrderByWithAggregationInput | CoordsOrderByWithAggregationInput[]
    by: CoordsScalarFieldEnum[] | CoordsScalarFieldEnum
    having?: CoordsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoordsCountAggregateInputType | true
    _avg?: CoordsAvgAggregateInputType
    _sum?: CoordsSumAggregateInputType
    _min?: CoordsMinAggregateInputType
    _max?: CoordsMaxAggregateInputType
  }

  export type CoordsGroupByOutputType = {
    id: string
    character: string
    xMin: number
    xMax: number
    yMin: number
    yMax: number
    _count: CoordsCountAggregateOutputType | null
    _avg: CoordsAvgAggregateOutputType | null
    _sum: CoordsSumAggregateOutputType | null
    _min: CoordsMinAggregateOutputType | null
    _max: CoordsMaxAggregateOutputType | null
  }

  type GetCoordsGroupByPayload<T extends CoordsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoordsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoordsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoordsGroupByOutputType[P]>
            : GetScalarType<T[P], CoordsGroupByOutputType[P]>
        }
      >
    >


  export type CoordsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    character?: boolean
    xMin?: boolean
    xMax?: boolean
    yMin?: boolean
    yMax?: boolean
  }, ExtArgs["result"]["coords"]>

  export type CoordsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    character?: boolean
    xMin?: boolean
    xMax?: boolean
    yMin?: boolean
    yMax?: boolean
  }, ExtArgs["result"]["coords"]>

  export type CoordsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    character?: boolean
    xMin?: boolean
    xMax?: boolean
    yMin?: boolean
    yMax?: boolean
  }, ExtArgs["result"]["coords"]>

  export type CoordsSelectScalar = {
    id?: boolean
    character?: boolean
    xMin?: boolean
    xMax?: boolean
    yMin?: boolean
    yMax?: boolean
  }

  export type CoordsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "character" | "xMin" | "xMax" | "yMin" | "yMax", ExtArgs["result"]["coords"]>

  export type $CoordsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coords"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      character: string
      xMin: number
      xMax: number
      yMin: number
      yMax: number
    }, ExtArgs["result"]["coords"]>
    composites: {}
  }

  type CoordsGetPayload<S extends boolean | null | undefined | CoordsDefaultArgs> = $Result.GetResult<Prisma.$CoordsPayload, S>

  type CoordsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoordsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoordsCountAggregateInputType | true
    }

  export interface CoordsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coords'], meta: { name: 'Coords' } }
    /**
     * Find zero or one Coords that matches the filter.
     * @param {CoordsFindUniqueArgs} args - Arguments to find a Coords
     * @example
     * // Get one Coords
     * const coords = await prisma.coords.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoordsFindUniqueArgs>(args: SelectSubset<T, CoordsFindUniqueArgs<ExtArgs>>): Prisma__CoordsClient<$Result.GetResult<Prisma.$CoordsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coords that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoordsFindUniqueOrThrowArgs} args - Arguments to find a Coords
     * @example
     * // Get one Coords
     * const coords = await prisma.coords.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoordsFindUniqueOrThrowArgs>(args: SelectSubset<T, CoordsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoordsClient<$Result.GetResult<Prisma.$CoordsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordsFindFirstArgs} args - Arguments to find a Coords
     * @example
     * // Get one Coords
     * const coords = await prisma.coords.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoordsFindFirstArgs>(args?: SelectSubset<T, CoordsFindFirstArgs<ExtArgs>>): Prisma__CoordsClient<$Result.GetResult<Prisma.$CoordsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coords that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordsFindFirstOrThrowArgs} args - Arguments to find a Coords
     * @example
     * // Get one Coords
     * const coords = await prisma.coords.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoordsFindFirstOrThrowArgs>(args?: SelectSubset<T, CoordsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoordsClient<$Result.GetResult<Prisma.$CoordsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coords
     * const coords = await prisma.coords.findMany()
     * 
     * // Get first 10 Coords
     * const coords = await prisma.coords.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coordsWithIdOnly = await prisma.coords.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoordsFindManyArgs>(args?: SelectSubset<T, CoordsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coords.
     * @param {CoordsCreateArgs} args - Arguments to create a Coords.
     * @example
     * // Create one Coords
     * const Coords = await prisma.coords.create({
     *   data: {
     *     // ... data to create a Coords
     *   }
     * })
     * 
     */
    create<T extends CoordsCreateArgs>(args: SelectSubset<T, CoordsCreateArgs<ExtArgs>>): Prisma__CoordsClient<$Result.GetResult<Prisma.$CoordsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coords.
     * @param {CoordsCreateManyArgs} args - Arguments to create many Coords.
     * @example
     * // Create many Coords
     * const coords = await prisma.coords.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoordsCreateManyArgs>(args?: SelectSubset<T, CoordsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coords and returns the data saved in the database.
     * @param {CoordsCreateManyAndReturnArgs} args - Arguments to create many Coords.
     * @example
     * // Create many Coords
     * const coords = await prisma.coords.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coords and only return the `id`
     * const coordsWithIdOnly = await prisma.coords.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoordsCreateManyAndReturnArgs>(args?: SelectSubset<T, CoordsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoordsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Coords.
     * @param {CoordsDeleteArgs} args - Arguments to delete one Coords.
     * @example
     * // Delete one Coords
     * const Coords = await prisma.coords.delete({
     *   where: {
     *     // ... filter to delete one Coords
     *   }
     * })
     * 
     */
    delete<T extends CoordsDeleteArgs>(args: SelectSubset<T, CoordsDeleteArgs<ExtArgs>>): Prisma__CoordsClient<$Result.GetResult<Prisma.$CoordsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coords.
     * @param {CoordsUpdateArgs} args - Arguments to update one Coords.
     * @example
     * // Update one Coords
     * const coords = await prisma.coords.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoordsUpdateArgs>(args: SelectSubset<T, CoordsUpdateArgs<ExtArgs>>): Prisma__CoordsClient<$Result.GetResult<Prisma.$CoordsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coords.
     * @param {CoordsDeleteManyArgs} args - Arguments to filter Coords to delete.
     * @example
     * // Delete a few Coords
     * const { count } = await prisma.coords.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoordsDeleteManyArgs>(args?: SelectSubset<T, CoordsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coords
     * const coords = await prisma.coords.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoordsUpdateManyArgs>(args: SelectSubset<T, CoordsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coords and returns the data updated in the database.
     * @param {CoordsUpdateManyAndReturnArgs} args - Arguments to update many Coords.
     * @example
     * // Update many Coords
     * const coords = await prisma.coords.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Coords and only return the `id`
     * const coordsWithIdOnly = await prisma.coords.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoordsUpdateManyAndReturnArgs>(args: SelectSubset<T, CoordsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoordsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Coords.
     * @param {CoordsUpsertArgs} args - Arguments to update or create a Coords.
     * @example
     * // Update or create a Coords
     * const coords = await prisma.coords.upsert({
     *   create: {
     *     // ... data to create a Coords
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coords we want to update
     *   }
     * })
     */
    upsert<T extends CoordsUpsertArgs>(args: SelectSubset<T, CoordsUpsertArgs<ExtArgs>>): Prisma__CoordsClient<$Result.GetResult<Prisma.$CoordsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordsCountArgs} args - Arguments to filter Coords to count.
     * @example
     * // Count the number of Coords
     * const count = await prisma.coords.count({
     *   where: {
     *     // ... the filter for the Coords we want to count
     *   }
     * })
    **/
    count<T extends CoordsCountArgs>(
      args?: Subset<T, CoordsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoordsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoordsAggregateArgs>(args: Subset<T, CoordsAggregateArgs>): Prisma.PrismaPromise<GetCoordsAggregateType<T>>

    /**
     * Group by Coords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoordsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoordsGroupByArgs['orderBy'] }
        : { orderBy?: CoordsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoordsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoordsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coords model
   */
  readonly fields: CoordsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coords.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoordsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Coords model
   */
  interface CoordsFieldRefs {
    readonly id: FieldRef<"Coords", 'String'>
    readonly character: FieldRef<"Coords", 'String'>
    readonly xMin: FieldRef<"Coords", 'Int'>
    readonly xMax: FieldRef<"Coords", 'Int'>
    readonly yMin: FieldRef<"Coords", 'Int'>
    readonly yMax: FieldRef<"Coords", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Coords findUnique
   */
  export type CoordsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coords
     */
    select?: CoordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coords
     */
    omit?: CoordsOmit<ExtArgs> | null
    /**
     * Filter, which Coords to fetch.
     */
    where: CoordsWhereUniqueInput
  }

  /**
   * Coords findUniqueOrThrow
   */
  export type CoordsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coords
     */
    select?: CoordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coords
     */
    omit?: CoordsOmit<ExtArgs> | null
    /**
     * Filter, which Coords to fetch.
     */
    where: CoordsWhereUniqueInput
  }

  /**
   * Coords findFirst
   */
  export type CoordsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coords
     */
    select?: CoordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coords
     */
    omit?: CoordsOmit<ExtArgs> | null
    /**
     * Filter, which Coords to fetch.
     */
    where?: CoordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coords to fetch.
     */
    orderBy?: CoordsOrderByWithRelationInput | CoordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coords.
     */
    cursor?: CoordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coords.
     */
    distinct?: CoordsScalarFieldEnum | CoordsScalarFieldEnum[]
  }

  /**
   * Coords findFirstOrThrow
   */
  export type CoordsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coords
     */
    select?: CoordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coords
     */
    omit?: CoordsOmit<ExtArgs> | null
    /**
     * Filter, which Coords to fetch.
     */
    where?: CoordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coords to fetch.
     */
    orderBy?: CoordsOrderByWithRelationInput | CoordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coords.
     */
    cursor?: CoordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coords.
     */
    distinct?: CoordsScalarFieldEnum | CoordsScalarFieldEnum[]
  }

  /**
   * Coords findMany
   */
  export type CoordsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coords
     */
    select?: CoordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coords
     */
    omit?: CoordsOmit<ExtArgs> | null
    /**
     * Filter, which Coords to fetch.
     */
    where?: CoordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coords to fetch.
     */
    orderBy?: CoordsOrderByWithRelationInput | CoordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coords.
     */
    cursor?: CoordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coords.
     */
    skip?: number
    distinct?: CoordsScalarFieldEnum | CoordsScalarFieldEnum[]
  }

  /**
   * Coords create
   */
  export type CoordsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coords
     */
    select?: CoordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coords
     */
    omit?: CoordsOmit<ExtArgs> | null
    /**
     * The data needed to create a Coords.
     */
    data: XOR<CoordsCreateInput, CoordsUncheckedCreateInput>
  }

  /**
   * Coords createMany
   */
  export type CoordsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coords.
     */
    data: CoordsCreateManyInput | CoordsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coords createManyAndReturn
   */
  export type CoordsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coords
     */
    select?: CoordsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coords
     */
    omit?: CoordsOmit<ExtArgs> | null
    /**
     * The data used to create many Coords.
     */
    data: CoordsCreateManyInput | CoordsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coords update
   */
  export type CoordsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coords
     */
    select?: CoordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coords
     */
    omit?: CoordsOmit<ExtArgs> | null
    /**
     * The data needed to update a Coords.
     */
    data: XOR<CoordsUpdateInput, CoordsUncheckedUpdateInput>
    /**
     * Choose, which Coords to update.
     */
    where: CoordsWhereUniqueInput
  }

  /**
   * Coords updateMany
   */
  export type CoordsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coords.
     */
    data: XOR<CoordsUpdateManyMutationInput, CoordsUncheckedUpdateManyInput>
    /**
     * Filter which Coords to update
     */
    where?: CoordsWhereInput
    /**
     * Limit how many Coords to update.
     */
    limit?: number
  }

  /**
   * Coords updateManyAndReturn
   */
  export type CoordsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coords
     */
    select?: CoordsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coords
     */
    omit?: CoordsOmit<ExtArgs> | null
    /**
     * The data used to update Coords.
     */
    data: XOR<CoordsUpdateManyMutationInput, CoordsUncheckedUpdateManyInput>
    /**
     * Filter which Coords to update
     */
    where?: CoordsWhereInput
    /**
     * Limit how many Coords to update.
     */
    limit?: number
  }

  /**
   * Coords upsert
   */
  export type CoordsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coords
     */
    select?: CoordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coords
     */
    omit?: CoordsOmit<ExtArgs> | null
    /**
     * The filter to search for the Coords to update in case it exists.
     */
    where: CoordsWhereUniqueInput
    /**
     * In case the Coords found by the `where` argument doesn't exist, create a new Coords with this data.
     */
    create: XOR<CoordsCreateInput, CoordsUncheckedCreateInput>
    /**
     * In case the Coords was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoordsUpdateInput, CoordsUncheckedUpdateInput>
  }

  /**
   * Coords delete
   */
  export type CoordsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coords
     */
    select?: CoordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coords
     */
    omit?: CoordsOmit<ExtArgs> | null
    /**
     * Filter which Coords to delete.
     */
    where: CoordsWhereUniqueInput
  }

  /**
   * Coords deleteMany
   */
  export type CoordsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coords to delete
     */
    where?: CoordsWhereInput
    /**
     * Limit how many Coords to delete.
     */
    limit?: number
  }

  /**
   * Coords without action
   */
  export type CoordsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coords
     */
    select?: CoordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coords
     */
    omit?: CoordsOmit<ExtArgs> | null
  }


  /**
   * Model LeaderBoard
   */

  export type AggregateLeaderBoard = {
    _count: LeaderBoardCountAggregateOutputType | null
    _min: LeaderBoardMinAggregateOutputType | null
    _max: LeaderBoardMaxAggregateOutputType | null
  }

  export type LeaderBoardMinAggregateOutputType = {
    id: string | null
    player: string | null
    timeTaken: string | null
  }

  export type LeaderBoardMaxAggregateOutputType = {
    id: string | null
    player: string | null
    timeTaken: string | null
  }

  export type LeaderBoardCountAggregateOutputType = {
    id: number
    player: number
    timeTaken: number
    _all: number
  }


  export type LeaderBoardMinAggregateInputType = {
    id?: true
    player?: true
    timeTaken?: true
  }

  export type LeaderBoardMaxAggregateInputType = {
    id?: true
    player?: true
    timeTaken?: true
  }

  export type LeaderBoardCountAggregateInputType = {
    id?: true
    player?: true
    timeTaken?: true
    _all?: true
  }

  export type LeaderBoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaderBoard to aggregate.
     */
    where?: LeaderBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderBoards to fetch.
     */
    orderBy?: LeaderBoardOrderByWithRelationInput | LeaderBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaderBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaderBoards
    **/
    _count?: true | LeaderBoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaderBoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaderBoardMaxAggregateInputType
  }

  export type GetLeaderBoardAggregateType<T extends LeaderBoardAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaderBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaderBoard[P]>
      : GetScalarType<T[P], AggregateLeaderBoard[P]>
  }




  export type LeaderBoardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderBoardWhereInput
    orderBy?: LeaderBoardOrderByWithAggregationInput | LeaderBoardOrderByWithAggregationInput[]
    by: LeaderBoardScalarFieldEnum[] | LeaderBoardScalarFieldEnum
    having?: LeaderBoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaderBoardCountAggregateInputType | true
    _min?: LeaderBoardMinAggregateInputType
    _max?: LeaderBoardMaxAggregateInputType
  }

  export type LeaderBoardGroupByOutputType = {
    id: string
    player: string
    timeTaken: string
    _count: LeaderBoardCountAggregateOutputType | null
    _min: LeaderBoardMinAggregateOutputType | null
    _max: LeaderBoardMaxAggregateOutputType | null
  }

  type GetLeaderBoardGroupByPayload<T extends LeaderBoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaderBoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaderBoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaderBoardGroupByOutputType[P]>
            : GetScalarType<T[P], LeaderBoardGroupByOutputType[P]>
        }
      >
    >


  export type LeaderBoardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player?: boolean
    timeTaken?: boolean
  }, ExtArgs["result"]["leaderBoard"]>

  export type LeaderBoardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player?: boolean
    timeTaken?: boolean
  }, ExtArgs["result"]["leaderBoard"]>

  export type LeaderBoardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player?: boolean
    timeTaken?: boolean
  }, ExtArgs["result"]["leaderBoard"]>

  export type LeaderBoardSelectScalar = {
    id?: boolean
    player?: boolean
    timeTaken?: boolean
  }

  export type LeaderBoardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "player" | "timeTaken", ExtArgs["result"]["leaderBoard"]>

  export type $LeaderBoardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaderBoard"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      player: string
      timeTaken: string
    }, ExtArgs["result"]["leaderBoard"]>
    composites: {}
  }

  type LeaderBoardGetPayload<S extends boolean | null | undefined | LeaderBoardDefaultArgs> = $Result.GetResult<Prisma.$LeaderBoardPayload, S>

  type LeaderBoardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaderBoardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaderBoardCountAggregateInputType | true
    }

  export interface LeaderBoardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaderBoard'], meta: { name: 'LeaderBoard' } }
    /**
     * Find zero or one LeaderBoard that matches the filter.
     * @param {LeaderBoardFindUniqueArgs} args - Arguments to find a LeaderBoard
     * @example
     * // Get one LeaderBoard
     * const leaderBoard = await prisma.leaderBoard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaderBoardFindUniqueArgs>(args: SelectSubset<T, LeaderBoardFindUniqueArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaderBoard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaderBoardFindUniqueOrThrowArgs} args - Arguments to find a LeaderBoard
     * @example
     * // Get one LeaderBoard
     * const leaderBoard = await prisma.leaderBoard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaderBoardFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaderBoardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaderBoard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderBoardFindFirstArgs} args - Arguments to find a LeaderBoard
     * @example
     * // Get one LeaderBoard
     * const leaderBoard = await prisma.leaderBoard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaderBoardFindFirstArgs>(args?: SelectSubset<T, LeaderBoardFindFirstArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaderBoard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderBoardFindFirstOrThrowArgs} args - Arguments to find a LeaderBoard
     * @example
     * // Get one LeaderBoard
     * const leaderBoard = await prisma.leaderBoard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaderBoardFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaderBoardFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaderBoards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderBoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaderBoards
     * const leaderBoards = await prisma.leaderBoard.findMany()
     * 
     * // Get first 10 LeaderBoards
     * const leaderBoards = await prisma.leaderBoard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaderBoardWithIdOnly = await prisma.leaderBoard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaderBoardFindManyArgs>(args?: SelectSubset<T, LeaderBoardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaderBoard.
     * @param {LeaderBoardCreateArgs} args - Arguments to create a LeaderBoard.
     * @example
     * // Create one LeaderBoard
     * const LeaderBoard = await prisma.leaderBoard.create({
     *   data: {
     *     // ... data to create a LeaderBoard
     *   }
     * })
     * 
     */
    create<T extends LeaderBoardCreateArgs>(args: SelectSubset<T, LeaderBoardCreateArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaderBoards.
     * @param {LeaderBoardCreateManyArgs} args - Arguments to create many LeaderBoards.
     * @example
     * // Create many LeaderBoards
     * const leaderBoard = await prisma.leaderBoard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaderBoardCreateManyArgs>(args?: SelectSubset<T, LeaderBoardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaderBoards and returns the data saved in the database.
     * @param {LeaderBoardCreateManyAndReturnArgs} args - Arguments to create many LeaderBoards.
     * @example
     * // Create many LeaderBoards
     * const leaderBoard = await prisma.leaderBoard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaderBoards and only return the `id`
     * const leaderBoardWithIdOnly = await prisma.leaderBoard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaderBoardCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaderBoardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaderBoard.
     * @param {LeaderBoardDeleteArgs} args - Arguments to delete one LeaderBoard.
     * @example
     * // Delete one LeaderBoard
     * const LeaderBoard = await prisma.leaderBoard.delete({
     *   where: {
     *     // ... filter to delete one LeaderBoard
     *   }
     * })
     * 
     */
    delete<T extends LeaderBoardDeleteArgs>(args: SelectSubset<T, LeaderBoardDeleteArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaderBoard.
     * @param {LeaderBoardUpdateArgs} args - Arguments to update one LeaderBoard.
     * @example
     * // Update one LeaderBoard
     * const leaderBoard = await prisma.leaderBoard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaderBoardUpdateArgs>(args: SelectSubset<T, LeaderBoardUpdateArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaderBoards.
     * @param {LeaderBoardDeleteManyArgs} args - Arguments to filter LeaderBoards to delete.
     * @example
     * // Delete a few LeaderBoards
     * const { count } = await prisma.leaderBoard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaderBoardDeleteManyArgs>(args?: SelectSubset<T, LeaderBoardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaderBoards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderBoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaderBoards
     * const leaderBoard = await prisma.leaderBoard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaderBoardUpdateManyArgs>(args: SelectSubset<T, LeaderBoardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaderBoards and returns the data updated in the database.
     * @param {LeaderBoardUpdateManyAndReturnArgs} args - Arguments to update many LeaderBoards.
     * @example
     * // Update many LeaderBoards
     * const leaderBoard = await prisma.leaderBoard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaderBoards and only return the `id`
     * const leaderBoardWithIdOnly = await prisma.leaderBoard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeaderBoardUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaderBoardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaderBoard.
     * @param {LeaderBoardUpsertArgs} args - Arguments to update or create a LeaderBoard.
     * @example
     * // Update or create a LeaderBoard
     * const leaderBoard = await prisma.leaderBoard.upsert({
     *   create: {
     *     // ... data to create a LeaderBoard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaderBoard we want to update
     *   }
     * })
     */
    upsert<T extends LeaderBoardUpsertArgs>(args: SelectSubset<T, LeaderBoardUpsertArgs<ExtArgs>>): Prisma__LeaderBoardClient<$Result.GetResult<Prisma.$LeaderBoardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaderBoards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderBoardCountArgs} args - Arguments to filter LeaderBoards to count.
     * @example
     * // Count the number of LeaderBoards
     * const count = await prisma.leaderBoard.count({
     *   where: {
     *     // ... the filter for the LeaderBoards we want to count
     *   }
     * })
    **/
    count<T extends LeaderBoardCountArgs>(
      args?: Subset<T, LeaderBoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaderBoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaderBoard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderBoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaderBoardAggregateArgs>(args: Subset<T, LeaderBoardAggregateArgs>): Prisma.PrismaPromise<GetLeaderBoardAggregateType<T>>

    /**
     * Group by LeaderBoard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderBoardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaderBoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaderBoardGroupByArgs['orderBy'] }
        : { orderBy?: LeaderBoardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaderBoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaderBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaderBoard model
   */
  readonly fields: LeaderBoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaderBoard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaderBoardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeaderBoard model
   */
  interface LeaderBoardFieldRefs {
    readonly id: FieldRef<"LeaderBoard", 'String'>
    readonly player: FieldRef<"LeaderBoard", 'String'>
    readonly timeTaken: FieldRef<"LeaderBoard", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LeaderBoard findUnique
   */
  export type LeaderBoardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Filter, which LeaderBoard to fetch.
     */
    where: LeaderBoardWhereUniqueInput
  }

  /**
   * LeaderBoard findUniqueOrThrow
   */
  export type LeaderBoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Filter, which LeaderBoard to fetch.
     */
    where: LeaderBoardWhereUniqueInput
  }

  /**
   * LeaderBoard findFirst
   */
  export type LeaderBoardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Filter, which LeaderBoard to fetch.
     */
    where?: LeaderBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderBoards to fetch.
     */
    orderBy?: LeaderBoardOrderByWithRelationInput | LeaderBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaderBoards.
     */
    cursor?: LeaderBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaderBoards.
     */
    distinct?: LeaderBoardScalarFieldEnum | LeaderBoardScalarFieldEnum[]
  }

  /**
   * LeaderBoard findFirstOrThrow
   */
  export type LeaderBoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Filter, which LeaderBoard to fetch.
     */
    where?: LeaderBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderBoards to fetch.
     */
    orderBy?: LeaderBoardOrderByWithRelationInput | LeaderBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaderBoards.
     */
    cursor?: LeaderBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaderBoards.
     */
    distinct?: LeaderBoardScalarFieldEnum | LeaderBoardScalarFieldEnum[]
  }

  /**
   * LeaderBoard findMany
   */
  export type LeaderBoardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Filter, which LeaderBoards to fetch.
     */
    where?: LeaderBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderBoards to fetch.
     */
    orderBy?: LeaderBoardOrderByWithRelationInput | LeaderBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaderBoards.
     */
    cursor?: LeaderBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderBoards.
     */
    skip?: number
    distinct?: LeaderBoardScalarFieldEnum | LeaderBoardScalarFieldEnum[]
  }

  /**
   * LeaderBoard create
   */
  export type LeaderBoardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * The data needed to create a LeaderBoard.
     */
    data: XOR<LeaderBoardCreateInput, LeaderBoardUncheckedCreateInput>
  }

  /**
   * LeaderBoard createMany
   */
  export type LeaderBoardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaderBoards.
     */
    data: LeaderBoardCreateManyInput | LeaderBoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaderBoard createManyAndReturn
   */
  export type LeaderBoardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * The data used to create many LeaderBoards.
     */
    data: LeaderBoardCreateManyInput | LeaderBoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaderBoard update
   */
  export type LeaderBoardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * The data needed to update a LeaderBoard.
     */
    data: XOR<LeaderBoardUpdateInput, LeaderBoardUncheckedUpdateInput>
    /**
     * Choose, which LeaderBoard to update.
     */
    where: LeaderBoardWhereUniqueInput
  }

  /**
   * LeaderBoard updateMany
   */
  export type LeaderBoardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaderBoards.
     */
    data: XOR<LeaderBoardUpdateManyMutationInput, LeaderBoardUncheckedUpdateManyInput>
    /**
     * Filter which LeaderBoards to update
     */
    where?: LeaderBoardWhereInput
    /**
     * Limit how many LeaderBoards to update.
     */
    limit?: number
  }

  /**
   * LeaderBoard updateManyAndReturn
   */
  export type LeaderBoardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * The data used to update LeaderBoards.
     */
    data: XOR<LeaderBoardUpdateManyMutationInput, LeaderBoardUncheckedUpdateManyInput>
    /**
     * Filter which LeaderBoards to update
     */
    where?: LeaderBoardWhereInput
    /**
     * Limit how many LeaderBoards to update.
     */
    limit?: number
  }

  /**
   * LeaderBoard upsert
   */
  export type LeaderBoardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * The filter to search for the LeaderBoard to update in case it exists.
     */
    where: LeaderBoardWhereUniqueInput
    /**
     * In case the LeaderBoard found by the `where` argument doesn't exist, create a new LeaderBoard with this data.
     */
    create: XOR<LeaderBoardCreateInput, LeaderBoardUncheckedCreateInput>
    /**
     * In case the LeaderBoard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaderBoardUpdateInput, LeaderBoardUncheckedUpdateInput>
  }

  /**
   * LeaderBoard delete
   */
  export type LeaderBoardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
    /**
     * Filter which LeaderBoard to delete.
     */
    where: LeaderBoardWhereUniqueInput
  }

  /**
   * LeaderBoard deleteMany
   */
  export type LeaderBoardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaderBoards to delete
     */
    where?: LeaderBoardWhereInput
    /**
     * Limit how many LeaderBoards to delete.
     */
    limit?: number
  }

  /**
   * LeaderBoard without action
   */
  export type LeaderBoardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderBoard
     */
    select?: LeaderBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderBoard
     */
    omit?: LeaderBoardOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CoordsScalarFieldEnum: {
    id: 'id',
    character: 'character',
    xMin: 'xMin',
    xMax: 'xMax',
    yMin: 'yMin',
    yMax: 'yMax'
  };

  export type CoordsScalarFieldEnum = (typeof CoordsScalarFieldEnum)[keyof typeof CoordsScalarFieldEnum]


  export const LeaderBoardScalarFieldEnum: {
    id: 'id',
    player: 'player',
    timeTaken: 'timeTaken'
  };

  export type LeaderBoardScalarFieldEnum = (typeof LeaderBoardScalarFieldEnum)[keyof typeof LeaderBoardScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CoordsWhereInput = {
    AND?: CoordsWhereInput | CoordsWhereInput[]
    OR?: CoordsWhereInput[]
    NOT?: CoordsWhereInput | CoordsWhereInput[]
    id?: StringFilter<"Coords"> | string
    character?: StringFilter<"Coords"> | string
    xMin?: IntFilter<"Coords"> | number
    xMax?: IntFilter<"Coords"> | number
    yMin?: IntFilter<"Coords"> | number
    yMax?: IntFilter<"Coords"> | number
  }

  export type CoordsOrderByWithRelationInput = {
    id?: SortOrder
    character?: SortOrder
    xMin?: SortOrder
    xMax?: SortOrder
    yMin?: SortOrder
    yMax?: SortOrder
  }

  export type CoordsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CoordsWhereInput | CoordsWhereInput[]
    OR?: CoordsWhereInput[]
    NOT?: CoordsWhereInput | CoordsWhereInput[]
    character?: StringFilter<"Coords"> | string
    xMin?: IntFilter<"Coords"> | number
    xMax?: IntFilter<"Coords"> | number
    yMin?: IntFilter<"Coords"> | number
    yMax?: IntFilter<"Coords"> | number
  }, "id">

  export type CoordsOrderByWithAggregationInput = {
    id?: SortOrder
    character?: SortOrder
    xMin?: SortOrder
    xMax?: SortOrder
    yMin?: SortOrder
    yMax?: SortOrder
    _count?: CoordsCountOrderByAggregateInput
    _avg?: CoordsAvgOrderByAggregateInput
    _max?: CoordsMaxOrderByAggregateInput
    _min?: CoordsMinOrderByAggregateInput
    _sum?: CoordsSumOrderByAggregateInput
  }

  export type CoordsScalarWhereWithAggregatesInput = {
    AND?: CoordsScalarWhereWithAggregatesInput | CoordsScalarWhereWithAggregatesInput[]
    OR?: CoordsScalarWhereWithAggregatesInput[]
    NOT?: CoordsScalarWhereWithAggregatesInput | CoordsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Coords"> | string
    character?: StringWithAggregatesFilter<"Coords"> | string
    xMin?: IntWithAggregatesFilter<"Coords"> | number
    xMax?: IntWithAggregatesFilter<"Coords"> | number
    yMin?: IntWithAggregatesFilter<"Coords"> | number
    yMax?: IntWithAggregatesFilter<"Coords"> | number
  }

  export type LeaderBoardWhereInput = {
    AND?: LeaderBoardWhereInput | LeaderBoardWhereInput[]
    OR?: LeaderBoardWhereInput[]
    NOT?: LeaderBoardWhereInput | LeaderBoardWhereInput[]
    id?: StringFilter<"LeaderBoard"> | string
    player?: StringFilter<"LeaderBoard"> | string
    timeTaken?: StringFilter<"LeaderBoard"> | string
  }

  export type LeaderBoardOrderByWithRelationInput = {
    id?: SortOrder
    player?: SortOrder
    timeTaken?: SortOrder
  }

  export type LeaderBoardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaderBoardWhereInput | LeaderBoardWhereInput[]
    OR?: LeaderBoardWhereInput[]
    NOT?: LeaderBoardWhereInput | LeaderBoardWhereInput[]
    player?: StringFilter<"LeaderBoard"> | string
    timeTaken?: StringFilter<"LeaderBoard"> | string
  }, "id">

  export type LeaderBoardOrderByWithAggregationInput = {
    id?: SortOrder
    player?: SortOrder
    timeTaken?: SortOrder
    _count?: LeaderBoardCountOrderByAggregateInput
    _max?: LeaderBoardMaxOrderByAggregateInput
    _min?: LeaderBoardMinOrderByAggregateInput
  }

  export type LeaderBoardScalarWhereWithAggregatesInput = {
    AND?: LeaderBoardScalarWhereWithAggregatesInput | LeaderBoardScalarWhereWithAggregatesInput[]
    OR?: LeaderBoardScalarWhereWithAggregatesInput[]
    NOT?: LeaderBoardScalarWhereWithAggregatesInput | LeaderBoardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeaderBoard"> | string
    player?: StringWithAggregatesFilter<"LeaderBoard"> | string
    timeTaken?: StringWithAggregatesFilter<"LeaderBoard"> | string
  }

  export type CoordsCreateInput = {
    id?: string
    character: string
    xMin: number
    xMax: number
    yMin: number
    yMax: number
  }

  export type CoordsUncheckedCreateInput = {
    id?: string
    character: string
    xMin: number
    xMax: number
    yMin: number
    yMax: number
  }

  export type CoordsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    character?: StringFieldUpdateOperationsInput | string
    xMin?: IntFieldUpdateOperationsInput | number
    xMax?: IntFieldUpdateOperationsInput | number
    yMin?: IntFieldUpdateOperationsInput | number
    yMax?: IntFieldUpdateOperationsInput | number
  }

  export type CoordsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    character?: StringFieldUpdateOperationsInput | string
    xMin?: IntFieldUpdateOperationsInput | number
    xMax?: IntFieldUpdateOperationsInput | number
    yMin?: IntFieldUpdateOperationsInput | number
    yMax?: IntFieldUpdateOperationsInput | number
  }

  export type CoordsCreateManyInput = {
    id?: string
    character: string
    xMin: number
    xMax: number
    yMin: number
    yMax: number
  }

  export type CoordsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    character?: StringFieldUpdateOperationsInput | string
    xMin?: IntFieldUpdateOperationsInput | number
    xMax?: IntFieldUpdateOperationsInput | number
    yMin?: IntFieldUpdateOperationsInput | number
    yMax?: IntFieldUpdateOperationsInput | number
  }

  export type CoordsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    character?: StringFieldUpdateOperationsInput | string
    xMin?: IntFieldUpdateOperationsInput | number
    xMax?: IntFieldUpdateOperationsInput | number
    yMin?: IntFieldUpdateOperationsInput | number
    yMax?: IntFieldUpdateOperationsInput | number
  }

  export type LeaderBoardCreateInput = {
    id?: string
    player: string
    timeTaken: string
  }

  export type LeaderBoardUncheckedCreateInput = {
    id?: string
    player: string
    timeTaken: string
  }

  export type LeaderBoardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    timeTaken?: StringFieldUpdateOperationsInput | string
  }

  export type LeaderBoardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    timeTaken?: StringFieldUpdateOperationsInput | string
  }

  export type LeaderBoardCreateManyInput = {
    id?: string
    player: string
    timeTaken: string
  }

  export type LeaderBoardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    timeTaken?: StringFieldUpdateOperationsInput | string
  }

  export type LeaderBoardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    player?: StringFieldUpdateOperationsInput | string
    timeTaken?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CoordsCountOrderByAggregateInput = {
    id?: SortOrder
    character?: SortOrder
    xMin?: SortOrder
    xMax?: SortOrder
    yMin?: SortOrder
    yMax?: SortOrder
  }

  export type CoordsAvgOrderByAggregateInput = {
    xMin?: SortOrder
    xMax?: SortOrder
    yMin?: SortOrder
    yMax?: SortOrder
  }

  export type CoordsMaxOrderByAggregateInput = {
    id?: SortOrder
    character?: SortOrder
    xMin?: SortOrder
    xMax?: SortOrder
    yMin?: SortOrder
    yMax?: SortOrder
  }

  export type CoordsMinOrderByAggregateInput = {
    id?: SortOrder
    character?: SortOrder
    xMin?: SortOrder
    xMax?: SortOrder
    yMin?: SortOrder
    yMax?: SortOrder
  }

  export type CoordsSumOrderByAggregateInput = {
    xMin?: SortOrder
    xMax?: SortOrder
    yMin?: SortOrder
    yMax?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type LeaderBoardCountOrderByAggregateInput = {
    id?: SortOrder
    player?: SortOrder
    timeTaken?: SortOrder
  }

  export type LeaderBoardMaxOrderByAggregateInput = {
    id?: SortOrder
    player?: SortOrder
    timeTaken?: SortOrder
  }

  export type LeaderBoardMinOrderByAggregateInput = {
    id?: SortOrder
    player?: SortOrder
    timeTaken?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}