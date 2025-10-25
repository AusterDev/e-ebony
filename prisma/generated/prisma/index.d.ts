
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
 * Model MockSession
 * 
 */
export type MockSession = $Result.DefaultSelection<Prisma.$MockSessionPayload>
/**
 * Model Mock
 * 
 */
export type Mock = $Result.DefaultSelection<Prisma.$MockPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Option
 * 
 */
export type Option = $Result.DefaultSelection<Prisma.$OptionPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model MockResult
 * 
 */
export type MockResult = $Result.DefaultSelection<Prisma.$MockResultPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MockSessions
 * const mockSessions = await prisma.mockSession.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more MockSessions
   * const mockSessions = await prisma.mockSession.findMany()
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
   * `prisma.mockSession`: Exposes CRUD operations for the **MockSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MockSessions
    * const mockSessions = await prisma.mockSession.findMany()
    * ```
    */
  get mockSession(): Prisma.MockSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mock`: Exposes CRUD operations for the **Mock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mocks
    * const mocks = await prisma.mock.findMany()
    * ```
    */
  get mock(): Prisma.MockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.option`: Exposes CRUD operations for the **Option** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Options
    * const options = await prisma.option.findMany()
    * ```
    */
  get option(): Prisma.OptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mockResult`: Exposes CRUD operations for the **MockResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MockResults
    * const mockResults = await prisma.mockResult.findMany()
    * ```
    */
  get mockResult(): Prisma.MockResultDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    MockSession: 'MockSession',
    Mock: 'Mock',
    Question: 'Question',
    Option: 'Option',
    Answer: 'Answer',
    MockResult: 'MockResult'
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
      modelProps: "mockSession" | "mock" | "question" | "option" | "answer" | "mockResult"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MockSession: {
        payload: Prisma.$MockSessionPayload<ExtArgs>
        fields: Prisma.MockSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MockSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MockSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockSessionPayload>
          }
          findFirst: {
            args: Prisma.MockSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MockSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockSessionPayload>
          }
          findMany: {
            args: Prisma.MockSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockSessionPayload>[]
          }
          create: {
            args: Prisma.MockSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockSessionPayload>
          }
          createMany: {
            args: Prisma.MockSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MockSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockSessionPayload>[]
          }
          delete: {
            args: Prisma.MockSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockSessionPayload>
          }
          update: {
            args: Prisma.MockSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockSessionPayload>
          }
          deleteMany: {
            args: Prisma.MockSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MockSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MockSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockSessionPayload>[]
          }
          upsert: {
            args: Prisma.MockSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockSessionPayload>
          }
          aggregate: {
            args: Prisma.MockSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMockSession>
          }
          groupBy: {
            args: Prisma.MockSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MockSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MockSessionCountArgs<ExtArgs>
            result: $Utils.Optional<MockSessionCountAggregateOutputType> | number
          }
        }
      }
      Mock: {
        payload: Prisma.$MockPayload<ExtArgs>
        fields: Prisma.MockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockPayload>
          }
          findFirst: {
            args: Prisma.MockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockPayload>
          }
          findMany: {
            args: Prisma.MockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockPayload>[]
          }
          create: {
            args: Prisma.MockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockPayload>
          }
          createMany: {
            args: Prisma.MockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockPayload>[]
          }
          delete: {
            args: Prisma.MockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockPayload>
          }
          update: {
            args: Prisma.MockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockPayload>
          }
          deleteMany: {
            args: Prisma.MockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockPayload>[]
          }
          upsert: {
            args: Prisma.MockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockPayload>
          }
          aggregate: {
            args: Prisma.MockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMock>
          }
          groupBy: {
            args: Prisma.MockGroupByArgs<ExtArgs>
            result: $Utils.Optional<MockGroupByOutputType>[]
          }
          count: {
            args: Prisma.MockCountArgs<ExtArgs>
            result: $Utils.Optional<MockCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Option: {
        payload: Prisma.$OptionPayload<ExtArgs>
        fields: Prisma.OptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findFirst: {
            args: Prisma.OptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findMany: {
            args: Prisma.OptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          create: {
            args: Prisma.OptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          createMany: {
            args: Prisma.OptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          delete: {
            args: Prisma.OptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          update: {
            args: Prisma.OptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          deleteMany: {
            args: Prisma.OptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          upsert: {
            args: Prisma.OptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          aggregate: {
            args: Prisma.OptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOption>
          }
          groupBy: {
            args: Prisma.OptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptionCountArgs<ExtArgs>
            result: $Utils.Optional<OptionCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      MockResult: {
        payload: Prisma.$MockResultPayload<ExtArgs>
        fields: Prisma.MockResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MockResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MockResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockResultPayload>
          }
          findFirst: {
            args: Prisma.MockResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MockResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockResultPayload>
          }
          findMany: {
            args: Prisma.MockResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockResultPayload>[]
          }
          create: {
            args: Prisma.MockResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockResultPayload>
          }
          createMany: {
            args: Prisma.MockResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MockResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockResultPayload>[]
          }
          delete: {
            args: Prisma.MockResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockResultPayload>
          }
          update: {
            args: Prisma.MockResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockResultPayload>
          }
          deleteMany: {
            args: Prisma.MockResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MockResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MockResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockResultPayload>[]
          }
          upsert: {
            args: Prisma.MockResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MockResultPayload>
          }
          aggregate: {
            args: Prisma.MockResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMockResult>
          }
          groupBy: {
            args: Prisma.MockResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<MockResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.MockResultCountArgs<ExtArgs>
            result: $Utils.Optional<MockResultCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    mockSession?: MockSessionOmit
    mock?: MockOmit
    question?: QuestionOmit
    option?: OptionOmit
    answer?: AnswerOmit
    mockResult?: MockResultOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type MockSessionCountOutputType
   */

  export type MockSessionCountOutputType = {
    Answer: number
  }

  export type MockSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Answer?: boolean | MockSessionCountOutputTypeCountAnswerArgs
  }

  // Custom InputTypes
  /**
   * MockSessionCountOutputType without action
   */
  export type MockSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockSessionCountOutputType
     */
    select?: MockSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MockSessionCountOutputType without action
   */
  export type MockSessionCountOutputTypeCountAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type MockCountOutputType
   */

  export type MockCountOutputType = {
    questions: number
    sessions: number
    MockResult: number
  }

  export type MockCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | MockCountOutputTypeCountQuestionsArgs
    sessions?: boolean | MockCountOutputTypeCountSessionsArgs
    MockResult?: boolean | MockCountOutputTypeCountMockResultArgs
  }

  // Custom InputTypes
  /**
   * MockCountOutputType without action
   */
  export type MockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockCountOutputType
     */
    select?: MockCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MockCountOutputType without action
   */
  export type MockCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * MockCountOutputType without action
   */
  export type MockCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MockSessionWhereInput
  }

  /**
   * MockCountOutputType without action
   */
  export type MockCountOutputTypeCountMockResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MockResultWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    options: number
    Answer: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | QuestionCountOutputTypeCountOptionsArgs
    Answer?: boolean | QuestionCountOutputTypeCountAnswerArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Count Type OptionCountOutputType
   */

  export type OptionCountOutputType = {
    Answer: number
  }

  export type OptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Answer?: boolean | OptionCountOutputTypeCountAnswerArgs
  }

  // Custom InputTypes
  /**
   * OptionCountOutputType without action
   */
  export type OptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionCountOutputType
     */
    select?: OptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OptionCountOutputType without action
   */
  export type OptionCountOutputTypeCountAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model MockSession
   */

  export type AggregateMockSession = {
    _count: MockSessionCountAggregateOutputType | null
    _min: MockSessionMinAggregateOutputType | null
    _max: MockSessionMaxAggregateOutputType | null
  }

  export type MockSessionMinAggregateOutputType = {
    id: string | null
    clerkID: string | null
    mockID: string | null
    createdAt: Date | null
  }

  export type MockSessionMaxAggregateOutputType = {
    id: string | null
    clerkID: string | null
    mockID: string | null
    createdAt: Date | null
  }

  export type MockSessionCountAggregateOutputType = {
    id: number
    clerkID: number
    mockID: number
    createdAt: number
    _all: number
  }


  export type MockSessionMinAggregateInputType = {
    id?: true
    clerkID?: true
    mockID?: true
    createdAt?: true
  }

  export type MockSessionMaxAggregateInputType = {
    id?: true
    clerkID?: true
    mockID?: true
    createdAt?: true
  }

  export type MockSessionCountAggregateInputType = {
    id?: true
    clerkID?: true
    mockID?: true
    createdAt?: true
    _all?: true
  }

  export type MockSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MockSession to aggregate.
     */
    where?: MockSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MockSessions to fetch.
     */
    orderBy?: MockSessionOrderByWithRelationInput | MockSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MockSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MockSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MockSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MockSessions
    **/
    _count?: true | MockSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MockSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MockSessionMaxAggregateInputType
  }

  export type GetMockSessionAggregateType<T extends MockSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateMockSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMockSession[P]>
      : GetScalarType<T[P], AggregateMockSession[P]>
  }




  export type MockSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MockSessionWhereInput
    orderBy?: MockSessionOrderByWithAggregationInput | MockSessionOrderByWithAggregationInput[]
    by: MockSessionScalarFieldEnum[] | MockSessionScalarFieldEnum
    having?: MockSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MockSessionCountAggregateInputType | true
    _min?: MockSessionMinAggregateInputType
    _max?: MockSessionMaxAggregateInputType
  }

  export type MockSessionGroupByOutputType = {
    id: string
    clerkID: string
    mockID: string
    createdAt: Date
    _count: MockSessionCountAggregateOutputType | null
    _min: MockSessionMinAggregateOutputType | null
    _max: MockSessionMaxAggregateOutputType | null
  }

  type GetMockSessionGroupByPayload<T extends MockSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MockSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MockSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MockSessionGroupByOutputType[P]>
            : GetScalarType<T[P], MockSessionGroupByOutputType[P]>
        }
      >
    >


  export type MockSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkID?: boolean
    mockID?: boolean
    createdAt?: boolean
    mock?: boolean | MockDefaultArgs<ExtArgs>
    Answer?: boolean | MockSession$AnswerArgs<ExtArgs>
    _count?: boolean | MockSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mockSession"]>

  export type MockSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkID?: boolean
    mockID?: boolean
    createdAt?: boolean
    mock?: boolean | MockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mockSession"]>

  export type MockSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkID?: boolean
    mockID?: boolean
    createdAt?: boolean
    mock?: boolean | MockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mockSession"]>

  export type MockSessionSelectScalar = {
    id?: boolean
    clerkID?: boolean
    mockID?: boolean
    createdAt?: boolean
  }

  export type MockSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkID" | "mockID" | "createdAt", ExtArgs["result"]["mockSession"]>
  export type MockSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mock?: boolean | MockDefaultArgs<ExtArgs>
    Answer?: boolean | MockSession$AnswerArgs<ExtArgs>
    _count?: boolean | MockSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MockSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mock?: boolean | MockDefaultArgs<ExtArgs>
  }
  export type MockSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mock?: boolean | MockDefaultArgs<ExtArgs>
  }

  export type $MockSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MockSession"
    objects: {
      mock: Prisma.$MockPayload<ExtArgs>
      Answer: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkID: string
      mockID: string
      createdAt: Date
    }, ExtArgs["result"]["mockSession"]>
    composites: {}
  }

  type MockSessionGetPayload<S extends boolean | null | undefined | MockSessionDefaultArgs> = $Result.GetResult<Prisma.$MockSessionPayload, S>

  type MockSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MockSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MockSessionCountAggregateInputType | true
    }

  export interface MockSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MockSession'], meta: { name: 'MockSession' } }
    /**
     * Find zero or one MockSession that matches the filter.
     * @param {MockSessionFindUniqueArgs} args - Arguments to find a MockSession
     * @example
     * // Get one MockSession
     * const mockSession = await prisma.mockSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MockSessionFindUniqueArgs>(args: SelectSubset<T, MockSessionFindUniqueArgs<ExtArgs>>): Prisma__MockSessionClient<$Result.GetResult<Prisma.$MockSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MockSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MockSessionFindUniqueOrThrowArgs} args - Arguments to find a MockSession
     * @example
     * // Get one MockSession
     * const mockSession = await prisma.mockSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MockSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, MockSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MockSessionClient<$Result.GetResult<Prisma.$MockSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MockSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockSessionFindFirstArgs} args - Arguments to find a MockSession
     * @example
     * // Get one MockSession
     * const mockSession = await prisma.mockSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MockSessionFindFirstArgs>(args?: SelectSubset<T, MockSessionFindFirstArgs<ExtArgs>>): Prisma__MockSessionClient<$Result.GetResult<Prisma.$MockSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MockSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockSessionFindFirstOrThrowArgs} args - Arguments to find a MockSession
     * @example
     * // Get one MockSession
     * const mockSession = await prisma.mockSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MockSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, MockSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MockSessionClient<$Result.GetResult<Prisma.$MockSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MockSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MockSessions
     * const mockSessions = await prisma.mockSession.findMany()
     * 
     * // Get first 10 MockSessions
     * const mockSessions = await prisma.mockSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mockSessionWithIdOnly = await prisma.mockSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MockSessionFindManyArgs>(args?: SelectSubset<T, MockSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MockSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MockSession.
     * @param {MockSessionCreateArgs} args - Arguments to create a MockSession.
     * @example
     * // Create one MockSession
     * const MockSession = await prisma.mockSession.create({
     *   data: {
     *     // ... data to create a MockSession
     *   }
     * })
     * 
     */
    create<T extends MockSessionCreateArgs>(args: SelectSubset<T, MockSessionCreateArgs<ExtArgs>>): Prisma__MockSessionClient<$Result.GetResult<Prisma.$MockSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MockSessions.
     * @param {MockSessionCreateManyArgs} args - Arguments to create many MockSessions.
     * @example
     * // Create many MockSessions
     * const mockSession = await prisma.mockSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MockSessionCreateManyArgs>(args?: SelectSubset<T, MockSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MockSessions and returns the data saved in the database.
     * @param {MockSessionCreateManyAndReturnArgs} args - Arguments to create many MockSessions.
     * @example
     * // Create many MockSessions
     * const mockSession = await prisma.mockSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MockSessions and only return the `id`
     * const mockSessionWithIdOnly = await prisma.mockSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MockSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, MockSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MockSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MockSession.
     * @param {MockSessionDeleteArgs} args - Arguments to delete one MockSession.
     * @example
     * // Delete one MockSession
     * const MockSession = await prisma.mockSession.delete({
     *   where: {
     *     // ... filter to delete one MockSession
     *   }
     * })
     * 
     */
    delete<T extends MockSessionDeleteArgs>(args: SelectSubset<T, MockSessionDeleteArgs<ExtArgs>>): Prisma__MockSessionClient<$Result.GetResult<Prisma.$MockSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MockSession.
     * @param {MockSessionUpdateArgs} args - Arguments to update one MockSession.
     * @example
     * // Update one MockSession
     * const mockSession = await prisma.mockSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MockSessionUpdateArgs>(args: SelectSubset<T, MockSessionUpdateArgs<ExtArgs>>): Prisma__MockSessionClient<$Result.GetResult<Prisma.$MockSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MockSessions.
     * @param {MockSessionDeleteManyArgs} args - Arguments to filter MockSessions to delete.
     * @example
     * // Delete a few MockSessions
     * const { count } = await prisma.mockSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MockSessionDeleteManyArgs>(args?: SelectSubset<T, MockSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MockSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MockSessions
     * const mockSession = await prisma.mockSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MockSessionUpdateManyArgs>(args: SelectSubset<T, MockSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MockSessions and returns the data updated in the database.
     * @param {MockSessionUpdateManyAndReturnArgs} args - Arguments to update many MockSessions.
     * @example
     * // Update many MockSessions
     * const mockSession = await prisma.mockSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MockSessions and only return the `id`
     * const mockSessionWithIdOnly = await prisma.mockSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends MockSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, MockSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MockSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MockSession.
     * @param {MockSessionUpsertArgs} args - Arguments to update or create a MockSession.
     * @example
     * // Update or create a MockSession
     * const mockSession = await prisma.mockSession.upsert({
     *   create: {
     *     // ... data to create a MockSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MockSession we want to update
     *   }
     * })
     */
    upsert<T extends MockSessionUpsertArgs>(args: SelectSubset<T, MockSessionUpsertArgs<ExtArgs>>): Prisma__MockSessionClient<$Result.GetResult<Prisma.$MockSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MockSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockSessionCountArgs} args - Arguments to filter MockSessions to count.
     * @example
     * // Count the number of MockSessions
     * const count = await prisma.mockSession.count({
     *   where: {
     *     // ... the filter for the MockSessions we want to count
     *   }
     * })
    **/
    count<T extends MockSessionCountArgs>(
      args?: Subset<T, MockSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MockSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MockSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MockSessionAggregateArgs>(args: Subset<T, MockSessionAggregateArgs>): Prisma.PrismaPromise<GetMockSessionAggregateType<T>>

    /**
     * Group by MockSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockSessionGroupByArgs} args - Group by arguments.
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
      T extends MockSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MockSessionGroupByArgs['orderBy'] }
        : { orderBy?: MockSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MockSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMockSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MockSession model
   */
  readonly fields: MockSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MockSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MockSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mock<T extends MockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MockDefaultArgs<ExtArgs>>): Prisma__MockClient<$Result.GetResult<Prisma.$MockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Answer<T extends MockSession$AnswerArgs<ExtArgs> = {}>(args?: Subset<T, MockSession$AnswerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MockSession model
   */
  interface MockSessionFieldRefs {
    readonly id: FieldRef<"MockSession", 'String'>
    readonly clerkID: FieldRef<"MockSession", 'String'>
    readonly mockID: FieldRef<"MockSession", 'String'>
    readonly createdAt: FieldRef<"MockSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MockSession findUnique
   */
  export type MockSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockSession
     */
    select?: MockSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockSession
     */
    omit?: MockSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockSessionInclude<ExtArgs> | null
    /**
     * Filter, which MockSession to fetch.
     */
    where: MockSessionWhereUniqueInput
  }

  /**
   * MockSession findUniqueOrThrow
   */
  export type MockSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockSession
     */
    select?: MockSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockSession
     */
    omit?: MockSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockSessionInclude<ExtArgs> | null
    /**
     * Filter, which MockSession to fetch.
     */
    where: MockSessionWhereUniqueInput
  }

  /**
   * MockSession findFirst
   */
  export type MockSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockSession
     */
    select?: MockSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockSession
     */
    omit?: MockSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockSessionInclude<ExtArgs> | null
    /**
     * Filter, which MockSession to fetch.
     */
    where?: MockSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MockSessions to fetch.
     */
    orderBy?: MockSessionOrderByWithRelationInput | MockSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MockSessions.
     */
    cursor?: MockSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MockSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MockSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MockSessions.
     */
    distinct?: MockSessionScalarFieldEnum | MockSessionScalarFieldEnum[]
  }

  /**
   * MockSession findFirstOrThrow
   */
  export type MockSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockSession
     */
    select?: MockSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockSession
     */
    omit?: MockSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockSessionInclude<ExtArgs> | null
    /**
     * Filter, which MockSession to fetch.
     */
    where?: MockSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MockSessions to fetch.
     */
    orderBy?: MockSessionOrderByWithRelationInput | MockSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MockSessions.
     */
    cursor?: MockSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MockSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MockSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MockSessions.
     */
    distinct?: MockSessionScalarFieldEnum | MockSessionScalarFieldEnum[]
  }

  /**
   * MockSession findMany
   */
  export type MockSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockSession
     */
    select?: MockSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockSession
     */
    omit?: MockSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockSessionInclude<ExtArgs> | null
    /**
     * Filter, which MockSessions to fetch.
     */
    where?: MockSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MockSessions to fetch.
     */
    orderBy?: MockSessionOrderByWithRelationInput | MockSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MockSessions.
     */
    cursor?: MockSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MockSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MockSessions.
     */
    skip?: number
    distinct?: MockSessionScalarFieldEnum | MockSessionScalarFieldEnum[]
  }

  /**
   * MockSession create
   */
  export type MockSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockSession
     */
    select?: MockSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockSession
     */
    omit?: MockSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a MockSession.
     */
    data: XOR<MockSessionCreateInput, MockSessionUncheckedCreateInput>
  }

  /**
   * MockSession createMany
   */
  export type MockSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MockSessions.
     */
    data: MockSessionCreateManyInput | MockSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MockSession createManyAndReturn
   */
  export type MockSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockSession
     */
    select?: MockSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MockSession
     */
    omit?: MockSessionOmit<ExtArgs> | null
    /**
     * The data used to create many MockSessions.
     */
    data: MockSessionCreateManyInput | MockSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MockSession update
   */
  export type MockSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockSession
     */
    select?: MockSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockSession
     */
    omit?: MockSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a MockSession.
     */
    data: XOR<MockSessionUpdateInput, MockSessionUncheckedUpdateInput>
    /**
     * Choose, which MockSession to update.
     */
    where: MockSessionWhereUniqueInput
  }

  /**
   * MockSession updateMany
   */
  export type MockSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MockSessions.
     */
    data: XOR<MockSessionUpdateManyMutationInput, MockSessionUncheckedUpdateManyInput>
    /**
     * Filter which MockSessions to update
     */
    where?: MockSessionWhereInput
    /**
     * Limit how many MockSessions to update.
     */
    limit?: number
  }

  /**
   * MockSession updateManyAndReturn
   */
  export type MockSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockSession
     */
    select?: MockSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MockSession
     */
    omit?: MockSessionOmit<ExtArgs> | null
    /**
     * The data used to update MockSessions.
     */
    data: XOR<MockSessionUpdateManyMutationInput, MockSessionUncheckedUpdateManyInput>
    /**
     * Filter which MockSessions to update
     */
    where?: MockSessionWhereInput
    /**
     * Limit how many MockSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MockSession upsert
   */
  export type MockSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockSession
     */
    select?: MockSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockSession
     */
    omit?: MockSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the MockSession to update in case it exists.
     */
    where: MockSessionWhereUniqueInput
    /**
     * In case the MockSession found by the `where` argument doesn't exist, create a new MockSession with this data.
     */
    create: XOR<MockSessionCreateInput, MockSessionUncheckedCreateInput>
    /**
     * In case the MockSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MockSessionUpdateInput, MockSessionUncheckedUpdateInput>
  }

  /**
   * MockSession delete
   */
  export type MockSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockSession
     */
    select?: MockSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockSession
     */
    omit?: MockSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockSessionInclude<ExtArgs> | null
    /**
     * Filter which MockSession to delete.
     */
    where: MockSessionWhereUniqueInput
  }

  /**
   * MockSession deleteMany
   */
  export type MockSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MockSessions to delete
     */
    where?: MockSessionWhereInput
    /**
     * Limit how many MockSessions to delete.
     */
    limit?: number
  }

  /**
   * MockSession.Answer
   */
  export type MockSession$AnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * MockSession without action
   */
  export type MockSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockSession
     */
    select?: MockSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockSession
     */
    omit?: MockSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockSessionInclude<ExtArgs> | null
  }


  /**
   * Model Mock
   */

  export type AggregateMock = {
    _count: MockCountAggregateOutputType | null
    _avg: MockAvgAggregateOutputType | null
    _sum: MockSumAggregateOutputType | null
    _min: MockMinAggregateOutputType | null
    _max: MockMaxAggregateOutputType | null
  }

  export type MockAvgAggregateOutputType = {
    totalTimeMins: number | null
  }

  export type MockSumAggregateOutputType = {
    totalTimeMins: number | null
  }

  export type MockMinAggregateOutputType = {
    id: string | null
    subject: string | null
    instructions: string | null
    clerkID: string | null
    totalTimeMins: number | null
    createdAt: Date | null
  }

  export type MockMaxAggregateOutputType = {
    id: string | null
    subject: string | null
    instructions: string | null
    clerkID: string | null
    totalTimeMins: number | null
    createdAt: Date | null
  }

  export type MockCountAggregateOutputType = {
    id: number
    subject: number
    instructions: number
    clerkID: number
    totalTimeMins: number
    createdAt: number
    _all: number
  }


  export type MockAvgAggregateInputType = {
    totalTimeMins?: true
  }

  export type MockSumAggregateInputType = {
    totalTimeMins?: true
  }

  export type MockMinAggregateInputType = {
    id?: true
    subject?: true
    instructions?: true
    clerkID?: true
    totalTimeMins?: true
    createdAt?: true
  }

  export type MockMaxAggregateInputType = {
    id?: true
    subject?: true
    instructions?: true
    clerkID?: true
    totalTimeMins?: true
    createdAt?: true
  }

  export type MockCountAggregateInputType = {
    id?: true
    subject?: true
    instructions?: true
    clerkID?: true
    totalTimeMins?: true
    createdAt?: true
    _all?: true
  }

  export type MockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mock to aggregate.
     */
    where?: MockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mocks to fetch.
     */
    orderBy?: MockOrderByWithRelationInput | MockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mocks
    **/
    _count?: true | MockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MockMaxAggregateInputType
  }

  export type GetMockAggregateType<T extends MockAggregateArgs> = {
        [P in keyof T & keyof AggregateMock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMock[P]>
      : GetScalarType<T[P], AggregateMock[P]>
  }




  export type MockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MockWhereInput
    orderBy?: MockOrderByWithAggregationInput | MockOrderByWithAggregationInput[]
    by: MockScalarFieldEnum[] | MockScalarFieldEnum
    having?: MockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MockCountAggregateInputType | true
    _avg?: MockAvgAggregateInputType
    _sum?: MockSumAggregateInputType
    _min?: MockMinAggregateInputType
    _max?: MockMaxAggregateInputType
  }

  export type MockGroupByOutputType = {
    id: string
    subject: string
    instructions: string
    clerkID: string
    totalTimeMins: number
    createdAt: Date
    _count: MockCountAggregateOutputType | null
    _avg: MockAvgAggregateOutputType | null
    _sum: MockSumAggregateOutputType | null
    _min: MockMinAggregateOutputType | null
    _max: MockMaxAggregateOutputType | null
  }

  type GetMockGroupByPayload<T extends MockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MockGroupByOutputType[P]>
            : GetScalarType<T[P], MockGroupByOutputType[P]>
        }
      >
    >


  export type MockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    instructions?: boolean
    clerkID?: boolean
    totalTimeMins?: boolean
    createdAt?: boolean
    questions?: boolean | Mock$questionsArgs<ExtArgs>
    sessions?: boolean | Mock$sessionsArgs<ExtArgs>
    MockResult?: boolean | Mock$MockResultArgs<ExtArgs>
    _count?: boolean | MockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mock"]>

  export type MockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    instructions?: boolean
    clerkID?: boolean
    totalTimeMins?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mock"]>

  export type MockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    instructions?: boolean
    clerkID?: boolean
    totalTimeMins?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mock"]>

  export type MockSelectScalar = {
    id?: boolean
    subject?: boolean
    instructions?: boolean
    clerkID?: boolean
    totalTimeMins?: boolean
    createdAt?: boolean
  }

  export type MockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subject" | "instructions" | "clerkID" | "totalTimeMins" | "createdAt", ExtArgs["result"]["mock"]>
  export type MockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Mock$questionsArgs<ExtArgs>
    sessions?: boolean | Mock$sessionsArgs<ExtArgs>
    MockResult?: boolean | Mock$MockResultArgs<ExtArgs>
    _count?: boolean | MockCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mock"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      sessions: Prisma.$MockSessionPayload<ExtArgs>[]
      MockResult: Prisma.$MockResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subject: string
      instructions: string
      clerkID: string
      totalTimeMins: number
      createdAt: Date
    }, ExtArgs["result"]["mock"]>
    composites: {}
  }

  type MockGetPayload<S extends boolean | null | undefined | MockDefaultArgs> = $Result.GetResult<Prisma.$MockPayload, S>

  type MockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MockCountAggregateInputType | true
    }

  export interface MockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mock'], meta: { name: 'Mock' } }
    /**
     * Find zero or one Mock that matches the filter.
     * @param {MockFindUniqueArgs} args - Arguments to find a Mock
     * @example
     * // Get one Mock
     * const mock = await prisma.mock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MockFindUniqueArgs>(args: SelectSubset<T, MockFindUniqueArgs<ExtArgs>>): Prisma__MockClient<$Result.GetResult<Prisma.$MockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MockFindUniqueOrThrowArgs} args - Arguments to find a Mock
     * @example
     * // Get one Mock
     * const mock = await prisma.mock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MockFindUniqueOrThrowArgs>(args: SelectSubset<T, MockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MockClient<$Result.GetResult<Prisma.$MockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockFindFirstArgs} args - Arguments to find a Mock
     * @example
     * // Get one Mock
     * const mock = await prisma.mock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MockFindFirstArgs>(args?: SelectSubset<T, MockFindFirstArgs<ExtArgs>>): Prisma__MockClient<$Result.GetResult<Prisma.$MockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockFindFirstOrThrowArgs} args - Arguments to find a Mock
     * @example
     * // Get one Mock
     * const mock = await prisma.mock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MockFindFirstOrThrowArgs>(args?: SelectSubset<T, MockFindFirstOrThrowArgs<ExtArgs>>): Prisma__MockClient<$Result.GetResult<Prisma.$MockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mocks
     * const mocks = await prisma.mock.findMany()
     * 
     * // Get first 10 Mocks
     * const mocks = await prisma.mock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mockWithIdOnly = await prisma.mock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MockFindManyArgs>(args?: SelectSubset<T, MockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mock.
     * @param {MockCreateArgs} args - Arguments to create a Mock.
     * @example
     * // Create one Mock
     * const Mock = await prisma.mock.create({
     *   data: {
     *     // ... data to create a Mock
     *   }
     * })
     * 
     */
    create<T extends MockCreateArgs>(args: SelectSubset<T, MockCreateArgs<ExtArgs>>): Prisma__MockClient<$Result.GetResult<Prisma.$MockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mocks.
     * @param {MockCreateManyArgs} args - Arguments to create many Mocks.
     * @example
     * // Create many Mocks
     * const mock = await prisma.mock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MockCreateManyArgs>(args?: SelectSubset<T, MockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mocks and returns the data saved in the database.
     * @param {MockCreateManyAndReturnArgs} args - Arguments to create many Mocks.
     * @example
     * // Create many Mocks
     * const mock = await prisma.mock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mocks and only return the `id`
     * const mockWithIdOnly = await prisma.mock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MockCreateManyAndReturnArgs>(args?: SelectSubset<T, MockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mock.
     * @param {MockDeleteArgs} args - Arguments to delete one Mock.
     * @example
     * // Delete one Mock
     * const Mock = await prisma.mock.delete({
     *   where: {
     *     // ... filter to delete one Mock
     *   }
     * })
     * 
     */
    delete<T extends MockDeleteArgs>(args: SelectSubset<T, MockDeleteArgs<ExtArgs>>): Prisma__MockClient<$Result.GetResult<Prisma.$MockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mock.
     * @param {MockUpdateArgs} args - Arguments to update one Mock.
     * @example
     * // Update one Mock
     * const mock = await prisma.mock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MockUpdateArgs>(args: SelectSubset<T, MockUpdateArgs<ExtArgs>>): Prisma__MockClient<$Result.GetResult<Prisma.$MockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mocks.
     * @param {MockDeleteManyArgs} args - Arguments to filter Mocks to delete.
     * @example
     * // Delete a few Mocks
     * const { count } = await prisma.mock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MockDeleteManyArgs>(args?: SelectSubset<T, MockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mocks
     * const mock = await prisma.mock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MockUpdateManyArgs>(args: SelectSubset<T, MockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mocks and returns the data updated in the database.
     * @param {MockUpdateManyAndReturnArgs} args - Arguments to update many Mocks.
     * @example
     * // Update many Mocks
     * const mock = await prisma.mock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mocks and only return the `id`
     * const mockWithIdOnly = await prisma.mock.updateManyAndReturn({
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
    updateManyAndReturn<T extends MockUpdateManyAndReturnArgs>(args: SelectSubset<T, MockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mock.
     * @param {MockUpsertArgs} args - Arguments to update or create a Mock.
     * @example
     * // Update or create a Mock
     * const mock = await prisma.mock.upsert({
     *   create: {
     *     // ... data to create a Mock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mock we want to update
     *   }
     * })
     */
    upsert<T extends MockUpsertArgs>(args: SelectSubset<T, MockUpsertArgs<ExtArgs>>): Prisma__MockClient<$Result.GetResult<Prisma.$MockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockCountArgs} args - Arguments to filter Mocks to count.
     * @example
     * // Count the number of Mocks
     * const count = await prisma.mock.count({
     *   where: {
     *     // ... the filter for the Mocks we want to count
     *   }
     * })
    **/
    count<T extends MockCountArgs>(
      args?: Subset<T, MockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MockAggregateArgs>(args: Subset<T, MockAggregateArgs>): Prisma.PrismaPromise<GetMockAggregateType<T>>

    /**
     * Group by Mock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockGroupByArgs} args - Group by arguments.
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
      T extends MockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MockGroupByArgs['orderBy'] }
        : { orderBy?: MockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mock model
   */
  readonly fields: MockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends Mock$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Mock$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Mock$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Mock$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MockSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MockResult<T extends Mock$MockResultArgs<ExtArgs> = {}>(args?: Subset<T, Mock$MockResultArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MockResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Mock model
   */
  interface MockFieldRefs {
    readonly id: FieldRef<"Mock", 'String'>
    readonly subject: FieldRef<"Mock", 'String'>
    readonly instructions: FieldRef<"Mock", 'String'>
    readonly clerkID: FieldRef<"Mock", 'String'>
    readonly totalTimeMins: FieldRef<"Mock", 'Int'>
    readonly createdAt: FieldRef<"Mock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mock findUnique
   */
  export type MockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mock
     */
    select?: MockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mock
     */
    omit?: MockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInclude<ExtArgs> | null
    /**
     * Filter, which Mock to fetch.
     */
    where: MockWhereUniqueInput
  }

  /**
   * Mock findUniqueOrThrow
   */
  export type MockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mock
     */
    select?: MockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mock
     */
    omit?: MockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInclude<ExtArgs> | null
    /**
     * Filter, which Mock to fetch.
     */
    where: MockWhereUniqueInput
  }

  /**
   * Mock findFirst
   */
  export type MockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mock
     */
    select?: MockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mock
     */
    omit?: MockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInclude<ExtArgs> | null
    /**
     * Filter, which Mock to fetch.
     */
    where?: MockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mocks to fetch.
     */
    orderBy?: MockOrderByWithRelationInput | MockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mocks.
     */
    cursor?: MockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mocks.
     */
    distinct?: MockScalarFieldEnum | MockScalarFieldEnum[]
  }

  /**
   * Mock findFirstOrThrow
   */
  export type MockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mock
     */
    select?: MockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mock
     */
    omit?: MockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInclude<ExtArgs> | null
    /**
     * Filter, which Mock to fetch.
     */
    where?: MockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mocks to fetch.
     */
    orderBy?: MockOrderByWithRelationInput | MockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mocks.
     */
    cursor?: MockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mocks.
     */
    distinct?: MockScalarFieldEnum | MockScalarFieldEnum[]
  }

  /**
   * Mock findMany
   */
  export type MockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mock
     */
    select?: MockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mock
     */
    omit?: MockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInclude<ExtArgs> | null
    /**
     * Filter, which Mocks to fetch.
     */
    where?: MockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mocks to fetch.
     */
    orderBy?: MockOrderByWithRelationInput | MockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mocks.
     */
    cursor?: MockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mocks.
     */
    skip?: number
    distinct?: MockScalarFieldEnum | MockScalarFieldEnum[]
  }

  /**
   * Mock create
   */
  export type MockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mock
     */
    select?: MockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mock
     */
    omit?: MockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInclude<ExtArgs> | null
    /**
     * The data needed to create a Mock.
     */
    data: XOR<MockCreateInput, MockUncheckedCreateInput>
  }

  /**
   * Mock createMany
   */
  export type MockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mocks.
     */
    data: MockCreateManyInput | MockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mock createManyAndReturn
   */
  export type MockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mock
     */
    select?: MockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mock
     */
    omit?: MockOmit<ExtArgs> | null
    /**
     * The data used to create many Mocks.
     */
    data: MockCreateManyInput | MockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mock update
   */
  export type MockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mock
     */
    select?: MockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mock
     */
    omit?: MockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInclude<ExtArgs> | null
    /**
     * The data needed to update a Mock.
     */
    data: XOR<MockUpdateInput, MockUncheckedUpdateInput>
    /**
     * Choose, which Mock to update.
     */
    where: MockWhereUniqueInput
  }

  /**
   * Mock updateMany
   */
  export type MockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mocks.
     */
    data: XOR<MockUpdateManyMutationInput, MockUncheckedUpdateManyInput>
    /**
     * Filter which Mocks to update
     */
    where?: MockWhereInput
    /**
     * Limit how many Mocks to update.
     */
    limit?: number
  }

  /**
   * Mock updateManyAndReturn
   */
  export type MockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mock
     */
    select?: MockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mock
     */
    omit?: MockOmit<ExtArgs> | null
    /**
     * The data used to update Mocks.
     */
    data: XOR<MockUpdateManyMutationInput, MockUncheckedUpdateManyInput>
    /**
     * Filter which Mocks to update
     */
    where?: MockWhereInput
    /**
     * Limit how many Mocks to update.
     */
    limit?: number
  }

  /**
   * Mock upsert
   */
  export type MockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mock
     */
    select?: MockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mock
     */
    omit?: MockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInclude<ExtArgs> | null
    /**
     * The filter to search for the Mock to update in case it exists.
     */
    where: MockWhereUniqueInput
    /**
     * In case the Mock found by the `where` argument doesn't exist, create a new Mock with this data.
     */
    create: XOR<MockCreateInput, MockUncheckedCreateInput>
    /**
     * In case the Mock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MockUpdateInput, MockUncheckedUpdateInput>
  }

  /**
   * Mock delete
   */
  export type MockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mock
     */
    select?: MockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mock
     */
    omit?: MockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInclude<ExtArgs> | null
    /**
     * Filter which Mock to delete.
     */
    where: MockWhereUniqueInput
  }

  /**
   * Mock deleteMany
   */
  export type MockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mocks to delete
     */
    where?: MockWhereInput
    /**
     * Limit how many Mocks to delete.
     */
    limit?: number
  }

  /**
   * Mock.questions
   */
  export type Mock$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Mock.sessions
   */
  export type Mock$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockSession
     */
    select?: MockSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockSession
     */
    omit?: MockSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockSessionInclude<ExtArgs> | null
    where?: MockSessionWhereInput
    orderBy?: MockSessionOrderByWithRelationInput | MockSessionOrderByWithRelationInput[]
    cursor?: MockSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MockSessionScalarFieldEnum | MockSessionScalarFieldEnum[]
  }

  /**
   * Mock.MockResult
   */
  export type Mock$MockResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockResult
     */
    select?: MockResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockResult
     */
    omit?: MockResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockResultInclude<ExtArgs> | null
    where?: MockResultWhereInput
    orderBy?: MockResultOrderByWithRelationInput | MockResultOrderByWithRelationInput[]
    cursor?: MockResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MockResultScalarFieldEnum | MockResultScalarFieldEnum[]
  }

  /**
   * Mock without action
   */
  export type MockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mock
     */
    select?: MockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mock
     */
    omit?: MockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    number: number | null
    marks: number | null
    negativeMarks: number | null
    correctOptionNumber: number | null
  }

  export type QuestionSumAggregateOutputType = {
    number: number | null
    marks: number | null
    negativeMarks: number | null
    correctOptionNumber: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    number: number | null
    content: string | null
    marks: number | null
    negativeMarks: number | null
    correctOptionNumber: number | null
    correctOptionID: string | null
    mockID: string | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    number: number | null
    content: string | null
    marks: number | null
    negativeMarks: number | null
    correctOptionNumber: number | null
    correctOptionID: string | null
    mockID: string | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    number: number
    content: number
    marks: number
    negativeMarks: number
    correctOptionNumber: number
    correctOptionID: number
    mockID: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    number?: true
    marks?: true
    negativeMarks?: true
    correctOptionNumber?: true
  }

  export type QuestionSumAggregateInputType = {
    number?: true
    marks?: true
    negativeMarks?: true
    correctOptionNumber?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    number?: true
    content?: true
    marks?: true
    negativeMarks?: true
    correctOptionNumber?: true
    correctOptionID?: true
    mockID?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    number?: true
    content?: true
    marks?: true
    negativeMarks?: true
    correctOptionNumber?: true
    correctOptionID?: true
    mockID?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    number?: true
    content?: true
    marks?: true
    negativeMarks?: true
    correctOptionNumber?: true
    correctOptionID?: true
    mockID?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    number: number
    content: string
    marks: number
    negativeMarks: number
    correctOptionNumber: number
    correctOptionID: string | null
    mockID: string
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    content?: boolean
    marks?: boolean
    negativeMarks?: boolean
    correctOptionNumber?: boolean
    correctOptionID?: boolean
    mockID?: boolean
    options?: boolean | Question$optionsArgs<ExtArgs>
    correctOption?: boolean | Question$correctOptionArgs<ExtArgs>
    mock?: boolean | MockDefaultArgs<ExtArgs>
    Answer?: boolean | Question$AnswerArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    content?: boolean
    marks?: boolean
    negativeMarks?: boolean
    correctOptionNumber?: boolean
    correctOptionID?: boolean
    mockID?: boolean
    correctOption?: boolean | Question$correctOptionArgs<ExtArgs>
    mock?: boolean | MockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    content?: boolean
    marks?: boolean
    negativeMarks?: boolean
    correctOptionNumber?: boolean
    correctOptionID?: boolean
    mockID?: boolean
    correctOption?: boolean | Question$correctOptionArgs<ExtArgs>
    mock?: boolean | MockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    number?: boolean
    content?: boolean
    marks?: boolean
    negativeMarks?: boolean
    correctOptionNumber?: boolean
    correctOptionID?: boolean
    mockID?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "content" | "marks" | "negativeMarks" | "correctOptionNumber" | "correctOptionID" | "mockID", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | Question$optionsArgs<ExtArgs>
    correctOption?: boolean | Question$correctOptionArgs<ExtArgs>
    mock?: boolean | MockDefaultArgs<ExtArgs>
    Answer?: boolean | Question$AnswerArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    correctOption?: boolean | Question$correctOptionArgs<ExtArgs>
    mock?: boolean | MockDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    correctOption?: boolean | Question$correctOptionArgs<ExtArgs>
    mock?: boolean | MockDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      options: Prisma.$OptionPayload<ExtArgs>[]
      correctOption: Prisma.$OptionPayload<ExtArgs> | null
      mock: Prisma.$MockPayload<ExtArgs>
      Answer: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: number
      content: string
      marks: number
      negativeMarks: number
      correctOptionNumber: number
      correctOptionID: string | null
      mockID: string
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    options<T extends Question$optionsArgs<ExtArgs> = {}>(args?: Subset<T, Question$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    correctOption<T extends Question$correctOptionArgs<ExtArgs> = {}>(args?: Subset<T, Question$correctOptionArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mock<T extends MockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MockDefaultArgs<ExtArgs>>): Prisma__MockClient<$Result.GetResult<Prisma.$MockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Answer<T extends Question$AnswerArgs<ExtArgs> = {}>(args?: Subset<T, Question$AnswerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly number: FieldRef<"Question", 'Int'>
    readonly content: FieldRef<"Question", 'String'>
    readonly marks: FieldRef<"Question", 'Int'>
    readonly negativeMarks: FieldRef<"Question", 'Int'>
    readonly correctOptionNumber: FieldRef<"Question", 'Int'>
    readonly correctOptionID: FieldRef<"Question", 'String'>
    readonly mockID: FieldRef<"Question", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.options
   */
  export type Question$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    cursor?: OptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Question.correctOption
   */
  export type Question$correctOptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    where?: OptionWhereInput
  }

  /**
   * Question.Answer
   */
  export type Question$AnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Option
   */

  export type AggregateOption = {
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  export type OptionAvgAggregateOutputType = {
    number: number | null
  }

  export type OptionSumAggregateOutputType = {
    number: number | null
  }

  export type OptionMinAggregateOutputType = {
    id: string | null
    number: number | null
    content: string | null
    questionID: string | null
  }

  export type OptionMaxAggregateOutputType = {
    id: string | null
    number: number | null
    content: string | null
    questionID: string | null
  }

  export type OptionCountAggregateOutputType = {
    id: number
    number: number
    content: number
    questionID: number
    _all: number
  }


  export type OptionAvgAggregateInputType = {
    number?: true
  }

  export type OptionSumAggregateInputType = {
    number?: true
  }

  export type OptionMinAggregateInputType = {
    id?: true
    number?: true
    content?: true
    questionID?: true
  }

  export type OptionMaxAggregateInputType = {
    id?: true
    number?: true
    content?: true
    questionID?: true
  }

  export type OptionCountAggregateInputType = {
    id?: true
    number?: true
    content?: true
    questionID?: true
    _all?: true
  }

  export type OptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Option to aggregate.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Options
    **/
    _count?: true | OptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionMaxAggregateInputType
  }

  export type GetOptionAggregateType<T extends OptionAggregateArgs> = {
        [P in keyof T & keyof AggregateOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOption[P]>
      : GetScalarType<T[P], AggregateOption[P]>
  }




  export type OptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithAggregationInput | OptionOrderByWithAggregationInput[]
    by: OptionScalarFieldEnum[] | OptionScalarFieldEnum
    having?: OptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionCountAggregateInputType | true
    _avg?: OptionAvgAggregateInputType
    _sum?: OptionSumAggregateInputType
    _min?: OptionMinAggregateInputType
    _max?: OptionMaxAggregateInputType
  }

  export type OptionGroupByOutputType = {
    id: string
    number: number
    content: string
    questionID: string
    _count: OptionCountAggregateOutputType | null
    _avg: OptionAvgAggregateOutputType | null
    _sum: OptionSumAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  type GetOptionGroupByPayload<T extends OptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionGroupByOutputType[P]>
            : GetScalarType<T[P], OptionGroupByOutputType[P]>
        }
      >
    >


  export type OptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    content?: boolean
    questionID?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    correctFor?: boolean | Option$correctForArgs<ExtArgs>
    Answer?: boolean | Option$AnswerArgs<ExtArgs>
    _count?: boolean | OptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    content?: boolean
    questionID?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    content?: boolean
    questionID?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>

  export type OptionSelectScalar = {
    id?: boolean
    number?: boolean
    content?: boolean
    questionID?: boolean
  }

  export type OptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "content" | "questionID", ExtArgs["result"]["option"]>
  export type OptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    correctFor?: boolean | Option$correctForArgs<ExtArgs>
    Answer?: boolean | Option$AnswerArgs<ExtArgs>
    _count?: boolean | OptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type OptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $OptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Option"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      correctFor: Prisma.$QuestionPayload<ExtArgs> | null
      Answer: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: number
      content: string
      questionID: string
    }, ExtArgs["result"]["option"]>
    composites: {}
  }

  type OptionGetPayload<S extends boolean | null | undefined | OptionDefaultArgs> = $Result.GetResult<Prisma.$OptionPayload, S>

  type OptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OptionCountAggregateInputType | true
    }

  export interface OptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Option'], meta: { name: 'Option' } }
    /**
     * Find zero or one Option that matches the filter.
     * @param {OptionFindUniqueArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OptionFindUniqueArgs>(args: SelectSubset<T, OptionFindUniqueArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Option that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OptionFindUniqueOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OptionFindUniqueOrThrowArgs>(args: SelectSubset<T, OptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OptionFindFirstArgs>(args?: SelectSubset<T, OptionFindFirstArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OptionFindFirstOrThrowArgs>(args?: SelectSubset<T, OptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Options
     * const options = await prisma.option.findMany()
     * 
     * // Get first 10 Options
     * const options = await prisma.option.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optionWithIdOnly = await prisma.option.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OptionFindManyArgs>(args?: SelectSubset<T, OptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Option.
     * @param {OptionCreateArgs} args - Arguments to create a Option.
     * @example
     * // Create one Option
     * const Option = await prisma.option.create({
     *   data: {
     *     // ... data to create a Option
     *   }
     * })
     * 
     */
    create<T extends OptionCreateArgs>(args: SelectSubset<T, OptionCreateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Options.
     * @param {OptionCreateManyArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OptionCreateManyArgs>(args?: SelectSubset<T, OptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Options and returns the data saved in the database.
     * @param {OptionCreateManyAndReturnArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Options and only return the `id`
     * const optionWithIdOnly = await prisma.option.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OptionCreateManyAndReturnArgs>(args?: SelectSubset<T, OptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Option.
     * @param {OptionDeleteArgs} args - Arguments to delete one Option.
     * @example
     * // Delete one Option
     * const Option = await prisma.option.delete({
     *   where: {
     *     // ... filter to delete one Option
     *   }
     * })
     * 
     */
    delete<T extends OptionDeleteArgs>(args: SelectSubset<T, OptionDeleteArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Option.
     * @param {OptionUpdateArgs} args - Arguments to update one Option.
     * @example
     * // Update one Option
     * const option = await prisma.option.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OptionUpdateArgs>(args: SelectSubset<T, OptionUpdateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Options.
     * @param {OptionDeleteManyArgs} args - Arguments to filter Options to delete.
     * @example
     * // Delete a few Options
     * const { count } = await prisma.option.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OptionDeleteManyArgs>(args?: SelectSubset<T, OptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OptionUpdateManyArgs>(args: SelectSubset<T, OptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options and returns the data updated in the database.
     * @param {OptionUpdateManyAndReturnArgs} args - Arguments to update many Options.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Options and only return the `id`
     * const optionWithIdOnly = await prisma.option.updateManyAndReturn({
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
    updateManyAndReturn<T extends OptionUpdateManyAndReturnArgs>(args: SelectSubset<T, OptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Option.
     * @param {OptionUpsertArgs} args - Arguments to update or create a Option.
     * @example
     * // Update or create a Option
     * const option = await prisma.option.upsert({
     *   create: {
     *     // ... data to create a Option
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Option we want to update
     *   }
     * })
     */
    upsert<T extends OptionUpsertArgs>(args: SelectSubset<T, OptionUpsertArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionCountArgs} args - Arguments to filter Options to count.
     * @example
     * // Count the number of Options
     * const count = await prisma.option.count({
     *   where: {
     *     // ... the filter for the Options we want to count
     *   }
     * })
    **/
    count<T extends OptionCountArgs>(
      args?: Subset<T, OptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OptionAggregateArgs>(args: Subset<T, OptionAggregateArgs>): Prisma.PrismaPromise<GetOptionAggregateType<T>>

    /**
     * Group by Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionGroupByArgs} args - Group by arguments.
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
      T extends OptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionGroupByArgs['orderBy'] }
        : { orderBy?: OptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Option model
   */
  readonly fields: OptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Option.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    correctFor<T extends Option$correctForArgs<ExtArgs> = {}>(args?: Subset<T, Option$correctForArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Answer<T extends Option$AnswerArgs<ExtArgs> = {}>(args?: Subset<T, Option$AnswerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Option model
   */
  interface OptionFieldRefs {
    readonly id: FieldRef<"Option", 'String'>
    readonly number: FieldRef<"Option", 'Int'>
    readonly content: FieldRef<"Option", 'String'>
    readonly questionID: FieldRef<"Option", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Option findUnique
   */
  export type OptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findUniqueOrThrow
   */
  export type OptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findFirst
   */
  export type OptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findFirstOrThrow
   */
  export type OptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findMany
   */
  export type OptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Options to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option create
   */
  export type OptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Option.
     */
    data: XOR<OptionCreateInput, OptionUncheckedCreateInput>
  }

  /**
   * Option createMany
   */
  export type OptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Option createManyAndReturn
   */
  export type OptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Option update
   */
  export type OptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Option.
     */
    data: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
    /**
     * Choose, which Option to update.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option updateMany
   */
  export type OptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to update.
     */
    limit?: number
  }

  /**
   * Option updateManyAndReturn
   */
  export type OptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Option upsert
   */
  export type OptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Option to update in case it exists.
     */
    where: OptionWhereUniqueInput
    /**
     * In case the Option found by the `where` argument doesn't exist, create a new Option with this data.
     */
    create: XOR<OptionCreateInput, OptionUncheckedCreateInput>
    /**
     * In case the Option was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
  }

  /**
   * Option delete
   */
  export type OptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter which Option to delete.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option deleteMany
   */
  export type OptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Options to delete
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to delete.
     */
    limit?: number
  }

  /**
   * Option.correctFor
   */
  export type Option$correctForArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
  }

  /**
   * Option.Answer
   */
  export type Option$AnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Option without action
   */
  export type OptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerMinAggregateOutputType = {
    id: string | null
    questionID: string | null
    optionID: string | null
    clerkID: string | null
    mockID: string | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: string | null
    questionID: string | null
    optionID: string | null
    clerkID: string | null
    mockID: string | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    questionID: number
    optionID: number
    clerkID: number
    mockID: number
    _all: number
  }


  export type AnswerMinAggregateInputType = {
    id?: true
    questionID?: true
    optionID?: true
    clerkID?: true
    mockID?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    questionID?: true
    optionID?: true
    clerkID?: true
    mockID?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    questionID?: true
    optionID?: true
    clerkID?: true
    mockID?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: string
    questionID: string
    optionID: string
    clerkID: string
    mockID: string
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionID?: boolean
    optionID?: boolean
    clerkID?: boolean
    mockID?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    option?: boolean | OptionDefaultArgs<ExtArgs>
    session?: boolean | MockSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionID?: boolean
    optionID?: boolean
    clerkID?: boolean
    mockID?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    option?: boolean | OptionDefaultArgs<ExtArgs>
    session?: boolean | MockSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionID?: boolean
    optionID?: boolean
    clerkID?: boolean
    mockID?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    option?: boolean | OptionDefaultArgs<ExtArgs>
    session?: boolean | MockSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    questionID?: boolean
    optionID?: boolean
    clerkID?: boolean
    mockID?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionID" | "optionID" | "clerkID" | "mockID", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    option?: boolean | OptionDefaultArgs<ExtArgs>
    session?: boolean | MockSessionDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    option?: boolean | OptionDefaultArgs<ExtArgs>
    session?: boolean | MockSessionDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    option?: boolean | OptionDefaultArgs<ExtArgs>
    session?: boolean | MockSessionDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      option: Prisma.$OptionPayload<ExtArgs>
      session: Prisma.$MockSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionID: string
      optionID: string
      clerkID: string
      mockID: string
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    option<T extends OptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OptionDefaultArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    session<T extends MockSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MockSessionDefaultArgs<ExtArgs>>): Prisma__MockSessionClient<$Result.GetResult<Prisma.$MockSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'String'>
    readonly questionID: FieldRef<"Answer", 'String'>
    readonly optionID: FieldRef<"Answer", 'String'>
    readonly clerkID: FieldRef<"Answer", 'String'>
    readonly mockID: FieldRef<"Answer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model MockResult
   */

  export type AggregateMockResult = {
    _count: MockResultCountAggregateOutputType | null
    _avg: MockResultAvgAggregateOutputType | null
    _sum: MockResultSumAggregateOutputType | null
    _min: MockResultMinAggregateOutputType | null
    _max: MockResultMaxAggregateOutputType | null
  }

  export type MockResultAvgAggregateOutputType = {
    totalMarks: number | null
    timeTakenSecs: number | null
  }

  export type MockResultSumAggregateOutputType = {
    totalMarks: number | null
    timeTakenSecs: number | null
  }

  export type MockResultMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    clerkID: string | null
    mockID: string | null
    totalMarks: number | null
    timeTakenSecs: number | null
  }

  export type MockResultMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    clerkID: string | null
    mockID: string | null
    totalMarks: number | null
    timeTakenSecs: number | null
  }

  export type MockResultCountAggregateOutputType = {
    id: number
    createdAt: number
    clerkID: number
    mockID: number
    totalMarks: number
    timeTakenSecs: number
    resultsJson: number
    _all: number
  }


  export type MockResultAvgAggregateInputType = {
    totalMarks?: true
    timeTakenSecs?: true
  }

  export type MockResultSumAggregateInputType = {
    totalMarks?: true
    timeTakenSecs?: true
  }

  export type MockResultMinAggregateInputType = {
    id?: true
    createdAt?: true
    clerkID?: true
    mockID?: true
    totalMarks?: true
    timeTakenSecs?: true
  }

  export type MockResultMaxAggregateInputType = {
    id?: true
    createdAt?: true
    clerkID?: true
    mockID?: true
    totalMarks?: true
    timeTakenSecs?: true
  }

  export type MockResultCountAggregateInputType = {
    id?: true
    createdAt?: true
    clerkID?: true
    mockID?: true
    totalMarks?: true
    timeTakenSecs?: true
    resultsJson?: true
    _all?: true
  }

  export type MockResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MockResult to aggregate.
     */
    where?: MockResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MockResults to fetch.
     */
    orderBy?: MockResultOrderByWithRelationInput | MockResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MockResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MockResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MockResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MockResults
    **/
    _count?: true | MockResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MockResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MockResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MockResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MockResultMaxAggregateInputType
  }

  export type GetMockResultAggregateType<T extends MockResultAggregateArgs> = {
        [P in keyof T & keyof AggregateMockResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMockResult[P]>
      : GetScalarType<T[P], AggregateMockResult[P]>
  }




  export type MockResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MockResultWhereInput
    orderBy?: MockResultOrderByWithAggregationInput | MockResultOrderByWithAggregationInput[]
    by: MockResultScalarFieldEnum[] | MockResultScalarFieldEnum
    having?: MockResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MockResultCountAggregateInputType | true
    _avg?: MockResultAvgAggregateInputType
    _sum?: MockResultSumAggregateInputType
    _min?: MockResultMinAggregateInputType
    _max?: MockResultMaxAggregateInputType
  }

  export type MockResultGroupByOutputType = {
    id: string
    createdAt: Date
    clerkID: string
    mockID: string
    totalMarks: number
    timeTakenSecs: number
    resultsJson: JsonValue
    _count: MockResultCountAggregateOutputType | null
    _avg: MockResultAvgAggregateOutputType | null
    _sum: MockResultSumAggregateOutputType | null
    _min: MockResultMinAggregateOutputType | null
    _max: MockResultMaxAggregateOutputType | null
  }

  type GetMockResultGroupByPayload<T extends MockResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MockResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MockResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MockResultGroupByOutputType[P]>
            : GetScalarType<T[P], MockResultGroupByOutputType[P]>
        }
      >
    >


  export type MockResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    clerkID?: boolean
    mockID?: boolean
    totalMarks?: boolean
    timeTakenSecs?: boolean
    resultsJson?: boolean
    mock?: boolean | MockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mockResult"]>

  export type MockResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    clerkID?: boolean
    mockID?: boolean
    totalMarks?: boolean
    timeTakenSecs?: boolean
    resultsJson?: boolean
    mock?: boolean | MockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mockResult"]>

  export type MockResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    clerkID?: boolean
    mockID?: boolean
    totalMarks?: boolean
    timeTakenSecs?: boolean
    resultsJson?: boolean
    mock?: boolean | MockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mockResult"]>

  export type MockResultSelectScalar = {
    id?: boolean
    createdAt?: boolean
    clerkID?: boolean
    mockID?: boolean
    totalMarks?: boolean
    timeTakenSecs?: boolean
    resultsJson?: boolean
  }

  export type MockResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "clerkID" | "mockID" | "totalMarks" | "timeTakenSecs" | "resultsJson", ExtArgs["result"]["mockResult"]>
  export type MockResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mock?: boolean | MockDefaultArgs<ExtArgs>
  }
  export type MockResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mock?: boolean | MockDefaultArgs<ExtArgs>
  }
  export type MockResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mock?: boolean | MockDefaultArgs<ExtArgs>
  }

  export type $MockResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MockResult"
    objects: {
      mock: Prisma.$MockPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      clerkID: string
      mockID: string
      totalMarks: number
      timeTakenSecs: number
      resultsJson: Prisma.JsonValue
    }, ExtArgs["result"]["mockResult"]>
    composites: {}
  }

  type MockResultGetPayload<S extends boolean | null | undefined | MockResultDefaultArgs> = $Result.GetResult<Prisma.$MockResultPayload, S>

  type MockResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MockResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MockResultCountAggregateInputType | true
    }

  export interface MockResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MockResult'], meta: { name: 'MockResult' } }
    /**
     * Find zero or one MockResult that matches the filter.
     * @param {MockResultFindUniqueArgs} args - Arguments to find a MockResult
     * @example
     * // Get one MockResult
     * const mockResult = await prisma.mockResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MockResultFindUniqueArgs>(args: SelectSubset<T, MockResultFindUniqueArgs<ExtArgs>>): Prisma__MockResultClient<$Result.GetResult<Prisma.$MockResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MockResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MockResultFindUniqueOrThrowArgs} args - Arguments to find a MockResult
     * @example
     * // Get one MockResult
     * const mockResult = await prisma.mockResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MockResultFindUniqueOrThrowArgs>(args: SelectSubset<T, MockResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MockResultClient<$Result.GetResult<Prisma.$MockResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MockResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockResultFindFirstArgs} args - Arguments to find a MockResult
     * @example
     * // Get one MockResult
     * const mockResult = await prisma.mockResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MockResultFindFirstArgs>(args?: SelectSubset<T, MockResultFindFirstArgs<ExtArgs>>): Prisma__MockResultClient<$Result.GetResult<Prisma.$MockResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MockResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockResultFindFirstOrThrowArgs} args - Arguments to find a MockResult
     * @example
     * // Get one MockResult
     * const mockResult = await prisma.mockResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MockResultFindFirstOrThrowArgs>(args?: SelectSubset<T, MockResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__MockResultClient<$Result.GetResult<Prisma.$MockResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MockResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MockResults
     * const mockResults = await prisma.mockResult.findMany()
     * 
     * // Get first 10 MockResults
     * const mockResults = await prisma.mockResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mockResultWithIdOnly = await prisma.mockResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MockResultFindManyArgs>(args?: SelectSubset<T, MockResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MockResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MockResult.
     * @param {MockResultCreateArgs} args - Arguments to create a MockResult.
     * @example
     * // Create one MockResult
     * const MockResult = await prisma.mockResult.create({
     *   data: {
     *     // ... data to create a MockResult
     *   }
     * })
     * 
     */
    create<T extends MockResultCreateArgs>(args: SelectSubset<T, MockResultCreateArgs<ExtArgs>>): Prisma__MockResultClient<$Result.GetResult<Prisma.$MockResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MockResults.
     * @param {MockResultCreateManyArgs} args - Arguments to create many MockResults.
     * @example
     * // Create many MockResults
     * const mockResult = await prisma.mockResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MockResultCreateManyArgs>(args?: SelectSubset<T, MockResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MockResults and returns the data saved in the database.
     * @param {MockResultCreateManyAndReturnArgs} args - Arguments to create many MockResults.
     * @example
     * // Create many MockResults
     * const mockResult = await prisma.mockResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MockResults and only return the `id`
     * const mockResultWithIdOnly = await prisma.mockResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MockResultCreateManyAndReturnArgs>(args?: SelectSubset<T, MockResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MockResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MockResult.
     * @param {MockResultDeleteArgs} args - Arguments to delete one MockResult.
     * @example
     * // Delete one MockResult
     * const MockResult = await prisma.mockResult.delete({
     *   where: {
     *     // ... filter to delete one MockResult
     *   }
     * })
     * 
     */
    delete<T extends MockResultDeleteArgs>(args: SelectSubset<T, MockResultDeleteArgs<ExtArgs>>): Prisma__MockResultClient<$Result.GetResult<Prisma.$MockResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MockResult.
     * @param {MockResultUpdateArgs} args - Arguments to update one MockResult.
     * @example
     * // Update one MockResult
     * const mockResult = await prisma.mockResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MockResultUpdateArgs>(args: SelectSubset<T, MockResultUpdateArgs<ExtArgs>>): Prisma__MockResultClient<$Result.GetResult<Prisma.$MockResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MockResults.
     * @param {MockResultDeleteManyArgs} args - Arguments to filter MockResults to delete.
     * @example
     * // Delete a few MockResults
     * const { count } = await prisma.mockResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MockResultDeleteManyArgs>(args?: SelectSubset<T, MockResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MockResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MockResults
     * const mockResult = await prisma.mockResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MockResultUpdateManyArgs>(args: SelectSubset<T, MockResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MockResults and returns the data updated in the database.
     * @param {MockResultUpdateManyAndReturnArgs} args - Arguments to update many MockResults.
     * @example
     * // Update many MockResults
     * const mockResult = await prisma.mockResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MockResults and only return the `id`
     * const mockResultWithIdOnly = await prisma.mockResult.updateManyAndReturn({
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
    updateManyAndReturn<T extends MockResultUpdateManyAndReturnArgs>(args: SelectSubset<T, MockResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MockResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MockResult.
     * @param {MockResultUpsertArgs} args - Arguments to update or create a MockResult.
     * @example
     * // Update or create a MockResult
     * const mockResult = await prisma.mockResult.upsert({
     *   create: {
     *     // ... data to create a MockResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MockResult we want to update
     *   }
     * })
     */
    upsert<T extends MockResultUpsertArgs>(args: SelectSubset<T, MockResultUpsertArgs<ExtArgs>>): Prisma__MockResultClient<$Result.GetResult<Prisma.$MockResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MockResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockResultCountArgs} args - Arguments to filter MockResults to count.
     * @example
     * // Count the number of MockResults
     * const count = await prisma.mockResult.count({
     *   where: {
     *     // ... the filter for the MockResults we want to count
     *   }
     * })
    **/
    count<T extends MockResultCountArgs>(
      args?: Subset<T, MockResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MockResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MockResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MockResultAggregateArgs>(args: Subset<T, MockResultAggregateArgs>): Prisma.PrismaPromise<GetMockResultAggregateType<T>>

    /**
     * Group by MockResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MockResultGroupByArgs} args - Group by arguments.
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
      T extends MockResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MockResultGroupByArgs['orderBy'] }
        : { orderBy?: MockResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MockResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMockResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MockResult model
   */
  readonly fields: MockResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MockResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MockResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mock<T extends MockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MockDefaultArgs<ExtArgs>>): Prisma__MockClient<$Result.GetResult<Prisma.$MockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MockResult model
   */
  interface MockResultFieldRefs {
    readonly id: FieldRef<"MockResult", 'String'>
    readonly createdAt: FieldRef<"MockResult", 'DateTime'>
    readonly clerkID: FieldRef<"MockResult", 'String'>
    readonly mockID: FieldRef<"MockResult", 'String'>
    readonly totalMarks: FieldRef<"MockResult", 'Int'>
    readonly timeTakenSecs: FieldRef<"MockResult", 'Int'>
    readonly resultsJson: FieldRef<"MockResult", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * MockResult findUnique
   */
  export type MockResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockResult
     */
    select?: MockResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockResult
     */
    omit?: MockResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockResultInclude<ExtArgs> | null
    /**
     * Filter, which MockResult to fetch.
     */
    where: MockResultWhereUniqueInput
  }

  /**
   * MockResult findUniqueOrThrow
   */
  export type MockResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockResult
     */
    select?: MockResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockResult
     */
    omit?: MockResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockResultInclude<ExtArgs> | null
    /**
     * Filter, which MockResult to fetch.
     */
    where: MockResultWhereUniqueInput
  }

  /**
   * MockResult findFirst
   */
  export type MockResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockResult
     */
    select?: MockResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockResult
     */
    omit?: MockResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockResultInclude<ExtArgs> | null
    /**
     * Filter, which MockResult to fetch.
     */
    where?: MockResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MockResults to fetch.
     */
    orderBy?: MockResultOrderByWithRelationInput | MockResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MockResults.
     */
    cursor?: MockResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MockResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MockResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MockResults.
     */
    distinct?: MockResultScalarFieldEnum | MockResultScalarFieldEnum[]
  }

  /**
   * MockResult findFirstOrThrow
   */
  export type MockResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockResult
     */
    select?: MockResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockResult
     */
    omit?: MockResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockResultInclude<ExtArgs> | null
    /**
     * Filter, which MockResult to fetch.
     */
    where?: MockResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MockResults to fetch.
     */
    orderBy?: MockResultOrderByWithRelationInput | MockResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MockResults.
     */
    cursor?: MockResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MockResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MockResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MockResults.
     */
    distinct?: MockResultScalarFieldEnum | MockResultScalarFieldEnum[]
  }

  /**
   * MockResult findMany
   */
  export type MockResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockResult
     */
    select?: MockResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockResult
     */
    omit?: MockResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockResultInclude<ExtArgs> | null
    /**
     * Filter, which MockResults to fetch.
     */
    where?: MockResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MockResults to fetch.
     */
    orderBy?: MockResultOrderByWithRelationInput | MockResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MockResults.
     */
    cursor?: MockResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MockResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MockResults.
     */
    skip?: number
    distinct?: MockResultScalarFieldEnum | MockResultScalarFieldEnum[]
  }

  /**
   * MockResult create
   */
  export type MockResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockResult
     */
    select?: MockResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockResult
     */
    omit?: MockResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockResultInclude<ExtArgs> | null
    /**
     * The data needed to create a MockResult.
     */
    data: XOR<MockResultCreateInput, MockResultUncheckedCreateInput>
  }

  /**
   * MockResult createMany
   */
  export type MockResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MockResults.
     */
    data: MockResultCreateManyInput | MockResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MockResult createManyAndReturn
   */
  export type MockResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockResult
     */
    select?: MockResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MockResult
     */
    omit?: MockResultOmit<ExtArgs> | null
    /**
     * The data used to create many MockResults.
     */
    data: MockResultCreateManyInput | MockResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MockResult update
   */
  export type MockResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockResult
     */
    select?: MockResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockResult
     */
    omit?: MockResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockResultInclude<ExtArgs> | null
    /**
     * The data needed to update a MockResult.
     */
    data: XOR<MockResultUpdateInput, MockResultUncheckedUpdateInput>
    /**
     * Choose, which MockResult to update.
     */
    where: MockResultWhereUniqueInput
  }

  /**
   * MockResult updateMany
   */
  export type MockResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MockResults.
     */
    data: XOR<MockResultUpdateManyMutationInput, MockResultUncheckedUpdateManyInput>
    /**
     * Filter which MockResults to update
     */
    where?: MockResultWhereInput
    /**
     * Limit how many MockResults to update.
     */
    limit?: number
  }

  /**
   * MockResult updateManyAndReturn
   */
  export type MockResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockResult
     */
    select?: MockResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MockResult
     */
    omit?: MockResultOmit<ExtArgs> | null
    /**
     * The data used to update MockResults.
     */
    data: XOR<MockResultUpdateManyMutationInput, MockResultUncheckedUpdateManyInput>
    /**
     * Filter which MockResults to update
     */
    where?: MockResultWhereInput
    /**
     * Limit how many MockResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MockResult upsert
   */
  export type MockResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockResult
     */
    select?: MockResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockResult
     */
    omit?: MockResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockResultInclude<ExtArgs> | null
    /**
     * The filter to search for the MockResult to update in case it exists.
     */
    where: MockResultWhereUniqueInput
    /**
     * In case the MockResult found by the `where` argument doesn't exist, create a new MockResult with this data.
     */
    create: XOR<MockResultCreateInput, MockResultUncheckedCreateInput>
    /**
     * In case the MockResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MockResultUpdateInput, MockResultUncheckedUpdateInput>
  }

  /**
   * MockResult delete
   */
  export type MockResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockResult
     */
    select?: MockResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockResult
     */
    omit?: MockResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockResultInclude<ExtArgs> | null
    /**
     * Filter which MockResult to delete.
     */
    where: MockResultWhereUniqueInput
  }

  /**
   * MockResult deleteMany
   */
  export type MockResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MockResults to delete
     */
    where?: MockResultWhereInput
    /**
     * Limit how many MockResults to delete.
     */
    limit?: number
  }

  /**
   * MockResult without action
   */
  export type MockResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MockResult
     */
    select?: MockResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MockResult
     */
    omit?: MockResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MockResultInclude<ExtArgs> | null
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


  export const MockSessionScalarFieldEnum: {
    id: 'id',
    clerkID: 'clerkID',
    mockID: 'mockID',
    createdAt: 'createdAt'
  };

  export type MockSessionScalarFieldEnum = (typeof MockSessionScalarFieldEnum)[keyof typeof MockSessionScalarFieldEnum]


  export const MockScalarFieldEnum: {
    id: 'id',
    subject: 'subject',
    instructions: 'instructions',
    clerkID: 'clerkID',
    totalTimeMins: 'totalTimeMins',
    createdAt: 'createdAt'
  };

  export type MockScalarFieldEnum = (typeof MockScalarFieldEnum)[keyof typeof MockScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    number: 'number',
    content: 'content',
    marks: 'marks',
    negativeMarks: 'negativeMarks',
    correctOptionNumber: 'correctOptionNumber',
    correctOptionID: 'correctOptionID',
    mockID: 'mockID'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const OptionScalarFieldEnum: {
    id: 'id',
    number: 'number',
    content: 'content',
    questionID: 'questionID'
  };

  export type OptionScalarFieldEnum = (typeof OptionScalarFieldEnum)[keyof typeof OptionScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    questionID: 'questionID',
    optionID: 'optionID',
    clerkID: 'clerkID',
    mockID: 'mockID'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const MockResultScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    clerkID: 'clerkID',
    mockID: 'mockID',
    totalMarks: 'totalMarks',
    timeTakenSecs: 'timeTakenSecs',
    resultsJson: 'resultsJson'
  };

  export type MockResultScalarFieldEnum = (typeof MockResultScalarFieldEnum)[keyof typeof MockResultScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type MockSessionWhereInput = {
    AND?: MockSessionWhereInput | MockSessionWhereInput[]
    OR?: MockSessionWhereInput[]
    NOT?: MockSessionWhereInput | MockSessionWhereInput[]
    id?: StringFilter<"MockSession"> | string
    clerkID?: StringFilter<"MockSession"> | string
    mockID?: StringFilter<"MockSession"> | string
    createdAt?: DateTimeFilter<"MockSession"> | Date | string
    mock?: XOR<MockScalarRelationFilter, MockWhereInput>
    Answer?: AnswerListRelationFilter
  }

  export type MockSessionOrderByWithRelationInput = {
    id?: SortOrder
    clerkID?: SortOrder
    mockID?: SortOrder
    createdAt?: SortOrder
    mock?: MockOrderByWithRelationInput
    Answer?: AnswerOrderByRelationAggregateInput
  }

  export type MockSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkID?: string
    AND?: MockSessionWhereInput | MockSessionWhereInput[]
    OR?: MockSessionWhereInput[]
    NOT?: MockSessionWhereInput | MockSessionWhereInput[]
    mockID?: StringFilter<"MockSession"> | string
    createdAt?: DateTimeFilter<"MockSession"> | Date | string
    mock?: XOR<MockScalarRelationFilter, MockWhereInput>
    Answer?: AnswerListRelationFilter
  }, "id" | "clerkID">

  export type MockSessionOrderByWithAggregationInput = {
    id?: SortOrder
    clerkID?: SortOrder
    mockID?: SortOrder
    createdAt?: SortOrder
    _count?: MockSessionCountOrderByAggregateInput
    _max?: MockSessionMaxOrderByAggregateInput
    _min?: MockSessionMinOrderByAggregateInput
  }

  export type MockSessionScalarWhereWithAggregatesInput = {
    AND?: MockSessionScalarWhereWithAggregatesInput | MockSessionScalarWhereWithAggregatesInput[]
    OR?: MockSessionScalarWhereWithAggregatesInput[]
    NOT?: MockSessionScalarWhereWithAggregatesInput | MockSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MockSession"> | string
    clerkID?: StringWithAggregatesFilter<"MockSession"> | string
    mockID?: StringWithAggregatesFilter<"MockSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MockSession"> | Date | string
  }

  export type MockWhereInput = {
    AND?: MockWhereInput | MockWhereInput[]
    OR?: MockWhereInput[]
    NOT?: MockWhereInput | MockWhereInput[]
    id?: StringFilter<"Mock"> | string
    subject?: StringFilter<"Mock"> | string
    instructions?: StringFilter<"Mock"> | string
    clerkID?: StringFilter<"Mock"> | string
    totalTimeMins?: IntFilter<"Mock"> | number
    createdAt?: DateTimeFilter<"Mock"> | Date | string
    questions?: QuestionListRelationFilter
    sessions?: MockSessionListRelationFilter
    MockResult?: MockResultListRelationFilter
  }

  export type MockOrderByWithRelationInput = {
    id?: SortOrder
    subject?: SortOrder
    instructions?: SortOrder
    clerkID?: SortOrder
    totalTimeMins?: SortOrder
    createdAt?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    sessions?: MockSessionOrderByRelationAggregateInput
    MockResult?: MockResultOrderByRelationAggregateInput
  }

  export type MockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    subject?: string
    AND?: MockWhereInput | MockWhereInput[]
    OR?: MockWhereInput[]
    NOT?: MockWhereInput | MockWhereInput[]
    instructions?: StringFilter<"Mock"> | string
    clerkID?: StringFilter<"Mock"> | string
    totalTimeMins?: IntFilter<"Mock"> | number
    createdAt?: DateTimeFilter<"Mock"> | Date | string
    questions?: QuestionListRelationFilter
    sessions?: MockSessionListRelationFilter
    MockResult?: MockResultListRelationFilter
  }, "id" | "subject">

  export type MockOrderByWithAggregationInput = {
    id?: SortOrder
    subject?: SortOrder
    instructions?: SortOrder
    clerkID?: SortOrder
    totalTimeMins?: SortOrder
    createdAt?: SortOrder
    _count?: MockCountOrderByAggregateInput
    _avg?: MockAvgOrderByAggregateInput
    _max?: MockMaxOrderByAggregateInput
    _min?: MockMinOrderByAggregateInput
    _sum?: MockSumOrderByAggregateInput
  }

  export type MockScalarWhereWithAggregatesInput = {
    AND?: MockScalarWhereWithAggregatesInput | MockScalarWhereWithAggregatesInput[]
    OR?: MockScalarWhereWithAggregatesInput[]
    NOT?: MockScalarWhereWithAggregatesInput | MockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Mock"> | string
    subject?: StringWithAggregatesFilter<"Mock"> | string
    instructions?: StringWithAggregatesFilter<"Mock"> | string
    clerkID?: StringWithAggregatesFilter<"Mock"> | string
    totalTimeMins?: IntWithAggregatesFilter<"Mock"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Mock"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    number?: IntFilter<"Question"> | number
    content?: StringFilter<"Question"> | string
    marks?: IntFilter<"Question"> | number
    negativeMarks?: IntFilter<"Question"> | number
    correctOptionNumber?: IntFilter<"Question"> | number
    correctOptionID?: StringNullableFilter<"Question"> | string | null
    mockID?: StringFilter<"Question"> | string
    options?: OptionListRelationFilter
    correctOption?: XOR<OptionNullableScalarRelationFilter, OptionWhereInput> | null
    mock?: XOR<MockScalarRelationFilter, MockWhereInput>
    Answer?: AnswerListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    content?: SortOrder
    marks?: SortOrder
    negativeMarks?: SortOrder
    correctOptionNumber?: SortOrder
    correctOptionID?: SortOrderInput | SortOrder
    mockID?: SortOrder
    options?: OptionOrderByRelationAggregateInput
    correctOption?: OptionOrderByWithRelationInput
    mock?: MockOrderByWithRelationInput
    Answer?: AnswerOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    correctOptionID?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    number?: IntFilter<"Question"> | number
    content?: StringFilter<"Question"> | string
    marks?: IntFilter<"Question"> | number
    negativeMarks?: IntFilter<"Question"> | number
    correctOptionNumber?: IntFilter<"Question"> | number
    mockID?: StringFilter<"Question"> | string
    options?: OptionListRelationFilter
    correctOption?: XOR<OptionNullableScalarRelationFilter, OptionWhereInput> | null
    mock?: XOR<MockScalarRelationFilter, MockWhereInput>
    Answer?: AnswerListRelationFilter
  }, "id" | "correctOptionID">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    content?: SortOrder
    marks?: SortOrder
    negativeMarks?: SortOrder
    correctOptionNumber?: SortOrder
    correctOptionID?: SortOrderInput | SortOrder
    mockID?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    number?: IntWithAggregatesFilter<"Question"> | number
    content?: StringWithAggregatesFilter<"Question"> | string
    marks?: IntWithAggregatesFilter<"Question"> | number
    negativeMarks?: IntWithAggregatesFilter<"Question"> | number
    correctOptionNumber?: IntWithAggregatesFilter<"Question"> | number
    correctOptionID?: StringNullableWithAggregatesFilter<"Question"> | string | null
    mockID?: StringWithAggregatesFilter<"Question"> | string
  }

  export type OptionWhereInput = {
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    id?: StringFilter<"Option"> | string
    number?: IntFilter<"Option"> | number
    content?: StringFilter<"Option"> | string
    questionID?: StringFilter<"Option"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    correctFor?: XOR<QuestionNullableScalarRelationFilter, QuestionWhereInput> | null
    Answer?: AnswerListRelationFilter
  }

  export type OptionOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    content?: SortOrder
    questionID?: SortOrder
    question?: QuestionOrderByWithRelationInput
    correctFor?: QuestionOrderByWithRelationInput
    Answer?: AnswerOrderByRelationAggregateInput
  }

  export type OptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    number?: IntFilter<"Option"> | number
    content?: StringFilter<"Option"> | string
    questionID?: StringFilter<"Option"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    correctFor?: XOR<QuestionNullableScalarRelationFilter, QuestionWhereInput> | null
    Answer?: AnswerListRelationFilter
  }, "id">

  export type OptionOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    content?: SortOrder
    questionID?: SortOrder
    _count?: OptionCountOrderByAggregateInput
    _avg?: OptionAvgOrderByAggregateInput
    _max?: OptionMaxOrderByAggregateInput
    _min?: OptionMinOrderByAggregateInput
    _sum?: OptionSumOrderByAggregateInput
  }

  export type OptionScalarWhereWithAggregatesInput = {
    AND?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    OR?: OptionScalarWhereWithAggregatesInput[]
    NOT?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Option"> | string
    number?: IntWithAggregatesFilter<"Option"> | number
    content?: StringWithAggregatesFilter<"Option"> | string
    questionID?: StringWithAggregatesFilter<"Option"> | string
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: StringFilter<"Answer"> | string
    questionID?: StringFilter<"Answer"> | string
    optionID?: StringFilter<"Answer"> | string
    clerkID?: StringFilter<"Answer"> | string
    mockID?: StringFilter<"Answer"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    option?: XOR<OptionScalarRelationFilter, OptionWhereInput>
    session?: XOR<MockSessionScalarRelationFilter, MockSessionWhereInput>
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    questionID?: SortOrder
    optionID?: SortOrder
    clerkID?: SortOrder
    mockID?: SortOrder
    question?: QuestionOrderByWithRelationInput
    option?: OptionOrderByWithRelationInput
    session?: MockSessionOrderByWithRelationInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    questionID_clerkID?: AnswerQuestionIDClerkIDCompoundUniqueInput
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    questionID?: StringFilter<"Answer"> | string
    optionID?: StringFilter<"Answer"> | string
    clerkID?: StringFilter<"Answer"> | string
    mockID?: StringFilter<"Answer"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    option?: XOR<OptionScalarRelationFilter, OptionWhereInput>
    session?: XOR<MockSessionScalarRelationFilter, MockSessionWhereInput>
  }, "id" | "questionID_clerkID">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    questionID?: SortOrder
    optionID?: SortOrder
    clerkID?: SortOrder
    mockID?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Answer"> | string
    questionID?: StringWithAggregatesFilter<"Answer"> | string
    optionID?: StringWithAggregatesFilter<"Answer"> | string
    clerkID?: StringWithAggregatesFilter<"Answer"> | string
    mockID?: StringWithAggregatesFilter<"Answer"> | string
  }

  export type MockResultWhereInput = {
    AND?: MockResultWhereInput | MockResultWhereInput[]
    OR?: MockResultWhereInput[]
    NOT?: MockResultWhereInput | MockResultWhereInput[]
    id?: StringFilter<"MockResult"> | string
    createdAt?: DateTimeFilter<"MockResult"> | Date | string
    clerkID?: StringFilter<"MockResult"> | string
    mockID?: StringFilter<"MockResult"> | string
    totalMarks?: IntFilter<"MockResult"> | number
    timeTakenSecs?: IntFilter<"MockResult"> | number
    resultsJson?: JsonFilter<"MockResult">
    mock?: XOR<MockScalarRelationFilter, MockWhereInput>
  }

  export type MockResultOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    clerkID?: SortOrder
    mockID?: SortOrder
    totalMarks?: SortOrder
    timeTakenSecs?: SortOrder
    resultsJson?: SortOrder
    mock?: MockOrderByWithRelationInput
  }

  export type MockResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MockResultWhereInput | MockResultWhereInput[]
    OR?: MockResultWhereInput[]
    NOT?: MockResultWhereInput | MockResultWhereInput[]
    createdAt?: DateTimeFilter<"MockResult"> | Date | string
    clerkID?: StringFilter<"MockResult"> | string
    mockID?: StringFilter<"MockResult"> | string
    totalMarks?: IntFilter<"MockResult"> | number
    timeTakenSecs?: IntFilter<"MockResult"> | number
    resultsJson?: JsonFilter<"MockResult">
    mock?: XOR<MockScalarRelationFilter, MockWhereInput>
  }, "id">

  export type MockResultOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    clerkID?: SortOrder
    mockID?: SortOrder
    totalMarks?: SortOrder
    timeTakenSecs?: SortOrder
    resultsJson?: SortOrder
    _count?: MockResultCountOrderByAggregateInput
    _avg?: MockResultAvgOrderByAggregateInput
    _max?: MockResultMaxOrderByAggregateInput
    _min?: MockResultMinOrderByAggregateInput
    _sum?: MockResultSumOrderByAggregateInput
  }

  export type MockResultScalarWhereWithAggregatesInput = {
    AND?: MockResultScalarWhereWithAggregatesInput | MockResultScalarWhereWithAggregatesInput[]
    OR?: MockResultScalarWhereWithAggregatesInput[]
    NOT?: MockResultScalarWhereWithAggregatesInput | MockResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MockResult"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MockResult"> | Date | string
    clerkID?: StringWithAggregatesFilter<"MockResult"> | string
    mockID?: StringWithAggregatesFilter<"MockResult"> | string
    totalMarks?: IntWithAggregatesFilter<"MockResult"> | number
    timeTakenSecs?: IntWithAggregatesFilter<"MockResult"> | number
    resultsJson?: JsonWithAggregatesFilter<"MockResult">
  }

  export type MockSessionCreateInput = {
    id?: string
    clerkID: string
    createdAt?: Date | string
    mock: MockCreateNestedOneWithoutSessionsInput
    Answer?: AnswerCreateNestedManyWithoutSessionInput
  }

  export type MockSessionUncheckedCreateInput = {
    id?: string
    clerkID: string
    mockID: string
    createdAt?: Date | string
    Answer?: AnswerUncheckedCreateNestedManyWithoutSessionInput
  }

  export type MockSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mock?: MockUpdateOneRequiredWithoutSessionsNestedInput
    Answer?: AnswerUpdateManyWithoutSessionNestedInput
  }

  export type MockSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    mockID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Answer?: AnswerUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type MockSessionCreateManyInput = {
    id?: string
    clerkID: string
    mockID: string
    createdAt?: Date | string
  }

  export type MockSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MockSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    mockID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MockCreateInput = {
    id?: string
    subject: string
    instructions: string
    clerkID: string
    totalTimeMins: number
    createdAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutMockInput
    sessions?: MockSessionCreateNestedManyWithoutMockInput
    MockResult?: MockResultCreateNestedManyWithoutMockInput
  }

  export type MockUncheckedCreateInput = {
    id?: string
    subject: string
    instructions: string
    clerkID: string
    totalTimeMins: number
    createdAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutMockInput
    sessions?: MockSessionUncheckedCreateNestedManyWithoutMockInput
    MockResult?: MockResultUncheckedCreateNestedManyWithoutMockInput
  }

  export type MockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    totalTimeMins?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutMockNestedInput
    sessions?: MockSessionUpdateManyWithoutMockNestedInput
    MockResult?: MockResultUpdateManyWithoutMockNestedInput
  }

  export type MockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    totalTimeMins?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutMockNestedInput
    sessions?: MockSessionUncheckedUpdateManyWithoutMockNestedInput
    MockResult?: MockResultUncheckedUpdateManyWithoutMockNestedInput
  }

  export type MockCreateManyInput = {
    id?: string
    subject: string
    instructions: string
    clerkID: string
    totalTimeMins: number
    createdAt?: Date | string
  }

  export type MockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    totalTimeMins?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    totalTimeMins?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    number: number
    content: string
    marks: number
    negativeMarks: number
    correctOptionNumber: number
    options?: OptionCreateNestedManyWithoutQuestionInput
    correctOption?: OptionCreateNestedOneWithoutCorrectForInput
    mock: MockCreateNestedOneWithoutQuestionsInput
    Answer?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    number: number
    content: string
    marks: number
    negativeMarks: number
    correctOptionNumber: number
    correctOptionID?: string | null
    mockID: string
    options?: OptionUncheckedCreateNestedManyWithoutQuestionInput
    Answer?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    negativeMarks?: IntFieldUpdateOperationsInput | number
    correctOptionNumber?: IntFieldUpdateOperationsInput | number
    options?: OptionUpdateManyWithoutQuestionNestedInput
    correctOption?: OptionUpdateOneWithoutCorrectForNestedInput
    mock?: MockUpdateOneRequiredWithoutQuestionsNestedInput
    Answer?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    negativeMarks?: IntFieldUpdateOperationsInput | number
    correctOptionNumber?: IntFieldUpdateOperationsInput | number
    correctOptionID?: NullableStringFieldUpdateOperationsInput | string | null
    mockID?: StringFieldUpdateOperationsInput | string
    options?: OptionUncheckedUpdateManyWithoutQuestionNestedInput
    Answer?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    number: number
    content: string
    marks: number
    negativeMarks: number
    correctOptionNumber: number
    correctOptionID?: string | null
    mockID: string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    negativeMarks?: IntFieldUpdateOperationsInput | number
    correctOptionNumber?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    negativeMarks?: IntFieldUpdateOperationsInput | number
    correctOptionNumber?: IntFieldUpdateOperationsInput | number
    correctOptionID?: NullableStringFieldUpdateOperationsInput | string | null
    mockID?: StringFieldUpdateOperationsInput | string
  }

  export type OptionCreateInput = {
    id?: string
    number: number
    content: string
    question: QuestionCreateNestedOneWithoutOptionsInput
    correctFor?: QuestionCreateNestedOneWithoutCorrectOptionInput
    Answer?: AnswerCreateNestedManyWithoutOptionInput
  }

  export type OptionUncheckedCreateInput = {
    id?: string
    number: number
    content: string
    questionID: string
    correctFor?: QuestionUncheckedCreateNestedOneWithoutCorrectOptionInput
    Answer?: AnswerUncheckedCreateNestedManyWithoutOptionInput
  }

  export type OptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutOptionsNestedInput
    correctFor?: QuestionUpdateOneWithoutCorrectOptionNestedInput
    Answer?: AnswerUpdateManyWithoutOptionNestedInput
  }

  export type OptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    questionID?: StringFieldUpdateOperationsInput | string
    correctFor?: QuestionUncheckedUpdateOneWithoutCorrectOptionNestedInput
    Answer?: AnswerUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type OptionCreateManyInput = {
    id?: string
    number: number
    content: string
    questionID: string
  }

  export type OptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type OptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    questionID?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateInput = {
    id?: string
    mockID: string
    question: QuestionCreateNestedOneWithoutAnswerInput
    option: OptionCreateNestedOneWithoutAnswerInput
    session: MockSessionCreateNestedOneWithoutAnswerInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: string
    questionID: string
    optionID: string
    clerkID: string
    mockID: string
  }

  export type AnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mockID?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutAnswerNestedInput
    option?: OptionUpdateOneRequiredWithoutAnswerNestedInput
    session?: MockSessionUpdateOneRequiredWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionID?: StringFieldUpdateOperationsInput | string
    optionID?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    mockID?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateManyInput = {
    id?: string
    questionID: string
    optionID: string
    clerkID: string
    mockID: string
  }

  export type AnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mockID?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionID?: StringFieldUpdateOperationsInput | string
    optionID?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    mockID?: StringFieldUpdateOperationsInput | string
  }

  export type MockResultCreateInput = {
    id?: string
    createdAt?: Date | string
    clerkID: string
    totalMarks: number
    timeTakenSecs: number
    resultsJson: JsonNullValueInput | InputJsonValue
    mock: MockCreateNestedOneWithoutMockResultInput
  }

  export type MockResultUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    clerkID: string
    mockID: string
    totalMarks: number
    timeTakenSecs: number
    resultsJson: JsonNullValueInput | InputJsonValue
  }

  export type MockResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkID?: StringFieldUpdateOperationsInput | string
    totalMarks?: IntFieldUpdateOperationsInput | number
    timeTakenSecs?: IntFieldUpdateOperationsInput | number
    resultsJson?: JsonNullValueInput | InputJsonValue
    mock?: MockUpdateOneRequiredWithoutMockResultNestedInput
  }

  export type MockResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkID?: StringFieldUpdateOperationsInput | string
    mockID?: StringFieldUpdateOperationsInput | string
    totalMarks?: IntFieldUpdateOperationsInput | number
    timeTakenSecs?: IntFieldUpdateOperationsInput | number
    resultsJson?: JsonNullValueInput | InputJsonValue
  }

  export type MockResultCreateManyInput = {
    id?: string
    createdAt?: Date | string
    clerkID: string
    mockID: string
    totalMarks: number
    timeTakenSecs: number
    resultsJson: JsonNullValueInput | InputJsonValue
  }

  export type MockResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkID?: StringFieldUpdateOperationsInput | string
    totalMarks?: IntFieldUpdateOperationsInput | number
    timeTakenSecs?: IntFieldUpdateOperationsInput | number
    resultsJson?: JsonNullValueInput | InputJsonValue
  }

  export type MockResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkID?: StringFieldUpdateOperationsInput | string
    mockID?: StringFieldUpdateOperationsInput | string
    totalMarks?: IntFieldUpdateOperationsInput | number
    timeTakenSecs?: IntFieldUpdateOperationsInput | number
    resultsJson?: JsonNullValueInput | InputJsonValue
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MockScalarRelationFilter = {
    is?: MockWhereInput
    isNot?: MockWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MockSessionCountOrderByAggregateInput = {
    id?: SortOrder
    clerkID?: SortOrder
    mockID?: SortOrder
    createdAt?: SortOrder
  }

  export type MockSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkID?: SortOrder
    mockID?: SortOrder
    createdAt?: SortOrder
  }

  export type MockSessionMinOrderByAggregateInput = {
    id?: SortOrder
    clerkID?: SortOrder
    mockID?: SortOrder
    createdAt?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type MockSessionListRelationFilter = {
    every?: MockSessionWhereInput
    some?: MockSessionWhereInput
    none?: MockSessionWhereInput
  }

  export type MockResultListRelationFilter = {
    every?: MockResultWhereInput
    some?: MockResultWhereInput
    none?: MockResultWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MockSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MockResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MockCountOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    instructions?: SortOrder
    clerkID?: SortOrder
    totalTimeMins?: SortOrder
    createdAt?: SortOrder
  }

  export type MockAvgOrderByAggregateInput = {
    totalTimeMins?: SortOrder
  }

  export type MockMaxOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    instructions?: SortOrder
    clerkID?: SortOrder
    totalTimeMins?: SortOrder
    createdAt?: SortOrder
  }

  export type MockMinOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    instructions?: SortOrder
    clerkID?: SortOrder
    totalTimeMins?: SortOrder
    createdAt?: SortOrder
  }

  export type MockSumOrderByAggregateInput = {
    totalTimeMins?: SortOrder
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type OptionListRelationFilter = {
    every?: OptionWhereInput
    some?: OptionWhereInput
    none?: OptionWhereInput
  }

  export type OptionNullableScalarRelationFilter = {
    is?: OptionWhereInput | null
    isNot?: OptionWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    content?: SortOrder
    marks?: SortOrder
    negativeMarks?: SortOrder
    correctOptionNumber?: SortOrder
    correctOptionID?: SortOrder
    mockID?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    number?: SortOrder
    marks?: SortOrder
    negativeMarks?: SortOrder
    correctOptionNumber?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    content?: SortOrder
    marks?: SortOrder
    negativeMarks?: SortOrder
    correctOptionNumber?: SortOrder
    correctOptionID?: SortOrder
    mockID?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    content?: SortOrder
    marks?: SortOrder
    negativeMarks?: SortOrder
    correctOptionNumber?: SortOrder
    correctOptionID?: SortOrder
    mockID?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    number?: SortOrder
    marks?: SortOrder
    negativeMarks?: SortOrder
    correctOptionNumber?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type QuestionNullableScalarRelationFilter = {
    is?: QuestionWhereInput | null
    isNot?: QuestionWhereInput | null
  }

  export type OptionCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    content?: SortOrder
    questionID?: SortOrder
  }

  export type OptionAvgOrderByAggregateInput = {
    number?: SortOrder
  }

  export type OptionMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    content?: SortOrder
    questionID?: SortOrder
  }

  export type OptionMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    content?: SortOrder
    questionID?: SortOrder
  }

  export type OptionSumOrderByAggregateInput = {
    number?: SortOrder
  }

  export type OptionScalarRelationFilter = {
    is?: OptionWhereInput
    isNot?: OptionWhereInput
  }

  export type MockSessionScalarRelationFilter = {
    is?: MockSessionWhereInput
    isNot?: MockSessionWhereInput
  }

  export type AnswerQuestionIDClerkIDCompoundUniqueInput = {
    questionID: string
    clerkID: string
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    questionID?: SortOrder
    optionID?: SortOrder
    clerkID?: SortOrder
    mockID?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    questionID?: SortOrder
    optionID?: SortOrder
    clerkID?: SortOrder
    mockID?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    questionID?: SortOrder
    optionID?: SortOrder
    clerkID?: SortOrder
    mockID?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MockResultCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    clerkID?: SortOrder
    mockID?: SortOrder
    totalMarks?: SortOrder
    timeTakenSecs?: SortOrder
    resultsJson?: SortOrder
  }

  export type MockResultAvgOrderByAggregateInput = {
    totalMarks?: SortOrder
    timeTakenSecs?: SortOrder
  }

  export type MockResultMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    clerkID?: SortOrder
    mockID?: SortOrder
    totalMarks?: SortOrder
    timeTakenSecs?: SortOrder
  }

  export type MockResultMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    clerkID?: SortOrder
    mockID?: SortOrder
    totalMarks?: SortOrder
    timeTakenSecs?: SortOrder
  }

  export type MockResultSumOrderByAggregateInput = {
    totalMarks?: SortOrder
    timeTakenSecs?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type MockCreateNestedOneWithoutSessionsInput = {
    create?: XOR<MockCreateWithoutSessionsInput, MockUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: MockCreateOrConnectWithoutSessionsInput
    connect?: MockWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutSessionInput = {
    create?: XOR<AnswerCreateWithoutSessionInput, AnswerUncheckedCreateWithoutSessionInput> | AnswerCreateWithoutSessionInput[] | AnswerUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutSessionInput | AnswerCreateOrConnectWithoutSessionInput[]
    createMany?: AnswerCreateManySessionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<AnswerCreateWithoutSessionInput, AnswerUncheckedCreateWithoutSessionInput> | AnswerCreateWithoutSessionInput[] | AnswerUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutSessionInput | AnswerCreateOrConnectWithoutSessionInput[]
    createMany?: AnswerCreateManySessionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MockUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<MockCreateWithoutSessionsInput, MockUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: MockCreateOrConnectWithoutSessionsInput
    upsert?: MockUpsertWithoutSessionsInput
    connect?: MockWhereUniqueInput
    update?: XOR<XOR<MockUpdateToOneWithWhereWithoutSessionsInput, MockUpdateWithoutSessionsInput>, MockUncheckedUpdateWithoutSessionsInput>
  }

  export type AnswerUpdateManyWithoutSessionNestedInput = {
    create?: XOR<AnswerCreateWithoutSessionInput, AnswerUncheckedCreateWithoutSessionInput> | AnswerCreateWithoutSessionInput[] | AnswerUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutSessionInput | AnswerCreateOrConnectWithoutSessionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutSessionInput | AnswerUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: AnswerCreateManySessionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutSessionInput | AnswerUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutSessionInput | AnswerUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<AnswerCreateWithoutSessionInput, AnswerUncheckedCreateWithoutSessionInput> | AnswerCreateWithoutSessionInput[] | AnswerUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutSessionInput | AnswerCreateOrConnectWithoutSessionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutSessionInput | AnswerUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: AnswerCreateManySessionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutSessionInput | AnswerUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutSessionInput | AnswerUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuestionCreateNestedManyWithoutMockInput = {
    create?: XOR<QuestionCreateWithoutMockInput, QuestionUncheckedCreateWithoutMockInput> | QuestionCreateWithoutMockInput[] | QuestionUncheckedCreateWithoutMockInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutMockInput | QuestionCreateOrConnectWithoutMockInput[]
    createMany?: QuestionCreateManyMockInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type MockSessionCreateNestedManyWithoutMockInput = {
    create?: XOR<MockSessionCreateWithoutMockInput, MockSessionUncheckedCreateWithoutMockInput> | MockSessionCreateWithoutMockInput[] | MockSessionUncheckedCreateWithoutMockInput[]
    connectOrCreate?: MockSessionCreateOrConnectWithoutMockInput | MockSessionCreateOrConnectWithoutMockInput[]
    createMany?: MockSessionCreateManyMockInputEnvelope
    connect?: MockSessionWhereUniqueInput | MockSessionWhereUniqueInput[]
  }

  export type MockResultCreateNestedManyWithoutMockInput = {
    create?: XOR<MockResultCreateWithoutMockInput, MockResultUncheckedCreateWithoutMockInput> | MockResultCreateWithoutMockInput[] | MockResultUncheckedCreateWithoutMockInput[]
    connectOrCreate?: MockResultCreateOrConnectWithoutMockInput | MockResultCreateOrConnectWithoutMockInput[]
    createMany?: MockResultCreateManyMockInputEnvelope
    connect?: MockResultWhereUniqueInput | MockResultWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutMockInput = {
    create?: XOR<QuestionCreateWithoutMockInput, QuestionUncheckedCreateWithoutMockInput> | QuestionCreateWithoutMockInput[] | QuestionUncheckedCreateWithoutMockInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutMockInput | QuestionCreateOrConnectWithoutMockInput[]
    createMany?: QuestionCreateManyMockInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type MockSessionUncheckedCreateNestedManyWithoutMockInput = {
    create?: XOR<MockSessionCreateWithoutMockInput, MockSessionUncheckedCreateWithoutMockInput> | MockSessionCreateWithoutMockInput[] | MockSessionUncheckedCreateWithoutMockInput[]
    connectOrCreate?: MockSessionCreateOrConnectWithoutMockInput | MockSessionCreateOrConnectWithoutMockInput[]
    createMany?: MockSessionCreateManyMockInputEnvelope
    connect?: MockSessionWhereUniqueInput | MockSessionWhereUniqueInput[]
  }

  export type MockResultUncheckedCreateNestedManyWithoutMockInput = {
    create?: XOR<MockResultCreateWithoutMockInput, MockResultUncheckedCreateWithoutMockInput> | MockResultCreateWithoutMockInput[] | MockResultUncheckedCreateWithoutMockInput[]
    connectOrCreate?: MockResultCreateOrConnectWithoutMockInput | MockResultCreateOrConnectWithoutMockInput[]
    createMany?: MockResultCreateManyMockInputEnvelope
    connect?: MockResultWhereUniqueInput | MockResultWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuestionUpdateManyWithoutMockNestedInput = {
    create?: XOR<QuestionCreateWithoutMockInput, QuestionUncheckedCreateWithoutMockInput> | QuestionCreateWithoutMockInput[] | QuestionUncheckedCreateWithoutMockInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutMockInput | QuestionCreateOrConnectWithoutMockInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutMockInput | QuestionUpsertWithWhereUniqueWithoutMockInput[]
    createMany?: QuestionCreateManyMockInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutMockInput | QuestionUpdateWithWhereUniqueWithoutMockInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutMockInput | QuestionUpdateManyWithWhereWithoutMockInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type MockSessionUpdateManyWithoutMockNestedInput = {
    create?: XOR<MockSessionCreateWithoutMockInput, MockSessionUncheckedCreateWithoutMockInput> | MockSessionCreateWithoutMockInput[] | MockSessionUncheckedCreateWithoutMockInput[]
    connectOrCreate?: MockSessionCreateOrConnectWithoutMockInput | MockSessionCreateOrConnectWithoutMockInput[]
    upsert?: MockSessionUpsertWithWhereUniqueWithoutMockInput | MockSessionUpsertWithWhereUniqueWithoutMockInput[]
    createMany?: MockSessionCreateManyMockInputEnvelope
    set?: MockSessionWhereUniqueInput | MockSessionWhereUniqueInput[]
    disconnect?: MockSessionWhereUniqueInput | MockSessionWhereUniqueInput[]
    delete?: MockSessionWhereUniqueInput | MockSessionWhereUniqueInput[]
    connect?: MockSessionWhereUniqueInput | MockSessionWhereUniqueInput[]
    update?: MockSessionUpdateWithWhereUniqueWithoutMockInput | MockSessionUpdateWithWhereUniqueWithoutMockInput[]
    updateMany?: MockSessionUpdateManyWithWhereWithoutMockInput | MockSessionUpdateManyWithWhereWithoutMockInput[]
    deleteMany?: MockSessionScalarWhereInput | MockSessionScalarWhereInput[]
  }

  export type MockResultUpdateManyWithoutMockNestedInput = {
    create?: XOR<MockResultCreateWithoutMockInput, MockResultUncheckedCreateWithoutMockInput> | MockResultCreateWithoutMockInput[] | MockResultUncheckedCreateWithoutMockInput[]
    connectOrCreate?: MockResultCreateOrConnectWithoutMockInput | MockResultCreateOrConnectWithoutMockInput[]
    upsert?: MockResultUpsertWithWhereUniqueWithoutMockInput | MockResultUpsertWithWhereUniqueWithoutMockInput[]
    createMany?: MockResultCreateManyMockInputEnvelope
    set?: MockResultWhereUniqueInput | MockResultWhereUniqueInput[]
    disconnect?: MockResultWhereUniqueInput | MockResultWhereUniqueInput[]
    delete?: MockResultWhereUniqueInput | MockResultWhereUniqueInput[]
    connect?: MockResultWhereUniqueInput | MockResultWhereUniqueInput[]
    update?: MockResultUpdateWithWhereUniqueWithoutMockInput | MockResultUpdateWithWhereUniqueWithoutMockInput[]
    updateMany?: MockResultUpdateManyWithWhereWithoutMockInput | MockResultUpdateManyWithWhereWithoutMockInput[]
    deleteMany?: MockResultScalarWhereInput | MockResultScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutMockNestedInput = {
    create?: XOR<QuestionCreateWithoutMockInput, QuestionUncheckedCreateWithoutMockInput> | QuestionCreateWithoutMockInput[] | QuestionUncheckedCreateWithoutMockInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutMockInput | QuestionCreateOrConnectWithoutMockInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutMockInput | QuestionUpsertWithWhereUniqueWithoutMockInput[]
    createMany?: QuestionCreateManyMockInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutMockInput | QuestionUpdateWithWhereUniqueWithoutMockInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutMockInput | QuestionUpdateManyWithWhereWithoutMockInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type MockSessionUncheckedUpdateManyWithoutMockNestedInput = {
    create?: XOR<MockSessionCreateWithoutMockInput, MockSessionUncheckedCreateWithoutMockInput> | MockSessionCreateWithoutMockInput[] | MockSessionUncheckedCreateWithoutMockInput[]
    connectOrCreate?: MockSessionCreateOrConnectWithoutMockInput | MockSessionCreateOrConnectWithoutMockInput[]
    upsert?: MockSessionUpsertWithWhereUniqueWithoutMockInput | MockSessionUpsertWithWhereUniqueWithoutMockInput[]
    createMany?: MockSessionCreateManyMockInputEnvelope
    set?: MockSessionWhereUniqueInput | MockSessionWhereUniqueInput[]
    disconnect?: MockSessionWhereUniqueInput | MockSessionWhereUniqueInput[]
    delete?: MockSessionWhereUniqueInput | MockSessionWhereUniqueInput[]
    connect?: MockSessionWhereUniqueInput | MockSessionWhereUniqueInput[]
    update?: MockSessionUpdateWithWhereUniqueWithoutMockInput | MockSessionUpdateWithWhereUniqueWithoutMockInput[]
    updateMany?: MockSessionUpdateManyWithWhereWithoutMockInput | MockSessionUpdateManyWithWhereWithoutMockInput[]
    deleteMany?: MockSessionScalarWhereInput | MockSessionScalarWhereInput[]
  }

  export type MockResultUncheckedUpdateManyWithoutMockNestedInput = {
    create?: XOR<MockResultCreateWithoutMockInput, MockResultUncheckedCreateWithoutMockInput> | MockResultCreateWithoutMockInput[] | MockResultUncheckedCreateWithoutMockInput[]
    connectOrCreate?: MockResultCreateOrConnectWithoutMockInput | MockResultCreateOrConnectWithoutMockInput[]
    upsert?: MockResultUpsertWithWhereUniqueWithoutMockInput | MockResultUpsertWithWhereUniqueWithoutMockInput[]
    createMany?: MockResultCreateManyMockInputEnvelope
    set?: MockResultWhereUniqueInput | MockResultWhereUniqueInput[]
    disconnect?: MockResultWhereUniqueInput | MockResultWhereUniqueInput[]
    delete?: MockResultWhereUniqueInput | MockResultWhereUniqueInput[]
    connect?: MockResultWhereUniqueInput | MockResultWhereUniqueInput[]
    update?: MockResultUpdateWithWhereUniqueWithoutMockInput | MockResultUpdateWithWhereUniqueWithoutMockInput[]
    updateMany?: MockResultUpdateManyWithWhereWithoutMockInput | MockResultUpdateManyWithWhereWithoutMockInput[]
    deleteMany?: MockResultScalarWhereInput | MockResultScalarWhereInput[]
  }

  export type OptionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput> | OptionCreateWithoutQuestionInput[] | OptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestionInput | OptionCreateOrConnectWithoutQuestionInput[]
    createMany?: OptionCreateManyQuestionInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type OptionCreateNestedOneWithoutCorrectForInput = {
    create?: XOR<OptionCreateWithoutCorrectForInput, OptionUncheckedCreateWithoutCorrectForInput>
    connectOrCreate?: OptionCreateOrConnectWithoutCorrectForInput
    connect?: OptionWhereUniqueInput
  }

  export type MockCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<MockCreateWithoutQuestionsInput, MockUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: MockCreateOrConnectWithoutQuestionsInput
    connect?: MockWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type OptionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput> | OptionCreateWithoutQuestionInput[] | OptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestionInput | OptionCreateOrConnectWithoutQuestionInput[]
    createMany?: OptionCreateManyQuestionInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type OptionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput> | OptionCreateWithoutQuestionInput[] | OptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestionInput | OptionCreateOrConnectWithoutQuestionInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutQuestionInput | OptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: OptionCreateManyQuestionInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutQuestionInput | OptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutQuestionInput | OptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type OptionUpdateOneWithoutCorrectForNestedInput = {
    create?: XOR<OptionCreateWithoutCorrectForInput, OptionUncheckedCreateWithoutCorrectForInput>
    connectOrCreate?: OptionCreateOrConnectWithoutCorrectForInput
    upsert?: OptionUpsertWithoutCorrectForInput
    disconnect?: OptionWhereInput | boolean
    delete?: OptionWhereInput | boolean
    connect?: OptionWhereUniqueInput
    update?: XOR<XOR<OptionUpdateToOneWithWhereWithoutCorrectForInput, OptionUpdateWithoutCorrectForInput>, OptionUncheckedUpdateWithoutCorrectForInput>
  }

  export type MockUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<MockCreateWithoutQuestionsInput, MockUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: MockCreateOrConnectWithoutQuestionsInput
    upsert?: MockUpsertWithoutQuestionsInput
    connect?: MockWhereUniqueInput
    update?: XOR<XOR<MockUpdateToOneWithWhereWithoutQuestionsInput, MockUpdateWithoutQuestionsInput>, MockUncheckedUpdateWithoutQuestionsInput>
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OptionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput> | OptionCreateWithoutQuestionInput[] | OptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestionInput | OptionCreateOrConnectWithoutQuestionInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutQuestionInput | OptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: OptionCreateManyQuestionInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutQuestionInput | OptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutQuestionInput | OptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutOptionsInput = {
    create?: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutOptionsInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutCorrectOptionInput = {
    create?: XOR<QuestionCreateWithoutCorrectOptionInput, QuestionUncheckedCreateWithoutCorrectOptionInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutCorrectOptionInput
    connect?: QuestionWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutOptionInput = {
    create?: XOR<AnswerCreateWithoutOptionInput, AnswerUncheckedCreateWithoutOptionInput> | AnswerCreateWithoutOptionInput[] | AnswerUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutOptionInput | AnswerCreateOrConnectWithoutOptionInput[]
    createMany?: AnswerCreateManyOptionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedOneWithoutCorrectOptionInput = {
    create?: XOR<QuestionCreateWithoutCorrectOptionInput, QuestionUncheckedCreateWithoutCorrectOptionInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutCorrectOptionInput
    connect?: QuestionWhereUniqueInput
  }

  export type AnswerUncheckedCreateNestedManyWithoutOptionInput = {
    create?: XOR<AnswerCreateWithoutOptionInput, AnswerUncheckedCreateWithoutOptionInput> | AnswerCreateWithoutOptionInput[] | AnswerUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutOptionInput | AnswerCreateOrConnectWithoutOptionInput[]
    createMany?: AnswerCreateManyOptionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type QuestionUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutOptionsInput
    upsert?: QuestionUpsertWithoutOptionsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutOptionsInput, QuestionUpdateWithoutOptionsInput>, QuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type QuestionUpdateOneWithoutCorrectOptionNestedInput = {
    create?: XOR<QuestionCreateWithoutCorrectOptionInput, QuestionUncheckedCreateWithoutCorrectOptionInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutCorrectOptionInput
    upsert?: QuestionUpsertWithoutCorrectOptionInput
    disconnect?: QuestionWhereInput | boolean
    delete?: QuestionWhereInput | boolean
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutCorrectOptionInput, QuestionUpdateWithoutCorrectOptionInput>, QuestionUncheckedUpdateWithoutCorrectOptionInput>
  }

  export type AnswerUpdateManyWithoutOptionNestedInput = {
    create?: XOR<AnswerCreateWithoutOptionInput, AnswerUncheckedCreateWithoutOptionInput> | AnswerCreateWithoutOptionInput[] | AnswerUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutOptionInput | AnswerCreateOrConnectWithoutOptionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutOptionInput | AnswerUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: AnswerCreateManyOptionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutOptionInput | AnswerUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutOptionInput | AnswerUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateOneWithoutCorrectOptionNestedInput = {
    create?: XOR<QuestionCreateWithoutCorrectOptionInput, QuestionUncheckedCreateWithoutCorrectOptionInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutCorrectOptionInput
    upsert?: QuestionUpsertWithoutCorrectOptionInput
    disconnect?: QuestionWhereInput | boolean
    delete?: QuestionWhereInput | boolean
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutCorrectOptionInput, QuestionUpdateWithoutCorrectOptionInput>, QuestionUncheckedUpdateWithoutCorrectOptionInput>
  }

  export type AnswerUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: XOR<AnswerCreateWithoutOptionInput, AnswerUncheckedCreateWithoutOptionInput> | AnswerCreateWithoutOptionInput[] | AnswerUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutOptionInput | AnswerCreateOrConnectWithoutOptionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutOptionInput | AnswerUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: AnswerCreateManyOptionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutOptionInput | AnswerUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutOptionInput | AnswerUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutAnswerInput = {
    create?: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput
    connect?: QuestionWhereUniqueInput
  }

  export type OptionCreateNestedOneWithoutAnswerInput = {
    create?: XOR<OptionCreateWithoutAnswerInput, OptionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: OptionCreateOrConnectWithoutAnswerInput
    connect?: OptionWhereUniqueInput
  }

  export type MockSessionCreateNestedOneWithoutAnswerInput = {
    create?: XOR<MockSessionCreateWithoutAnswerInput, MockSessionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: MockSessionCreateOrConnectWithoutAnswerInput
    connect?: MockSessionWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutAnswerNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswerInput
    upsert?: QuestionUpsertWithoutAnswerInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswerInput, QuestionUpdateWithoutAnswerInput>, QuestionUncheckedUpdateWithoutAnswerInput>
  }

  export type OptionUpdateOneRequiredWithoutAnswerNestedInput = {
    create?: XOR<OptionCreateWithoutAnswerInput, OptionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: OptionCreateOrConnectWithoutAnswerInput
    upsert?: OptionUpsertWithoutAnswerInput
    connect?: OptionWhereUniqueInput
    update?: XOR<XOR<OptionUpdateToOneWithWhereWithoutAnswerInput, OptionUpdateWithoutAnswerInput>, OptionUncheckedUpdateWithoutAnswerInput>
  }

  export type MockSessionUpdateOneRequiredWithoutAnswerNestedInput = {
    create?: XOR<MockSessionCreateWithoutAnswerInput, MockSessionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: MockSessionCreateOrConnectWithoutAnswerInput
    upsert?: MockSessionUpsertWithoutAnswerInput
    connect?: MockSessionWhereUniqueInput
    update?: XOR<XOR<MockSessionUpdateToOneWithWhereWithoutAnswerInput, MockSessionUpdateWithoutAnswerInput>, MockSessionUncheckedUpdateWithoutAnswerInput>
  }

  export type MockCreateNestedOneWithoutMockResultInput = {
    create?: XOR<MockCreateWithoutMockResultInput, MockUncheckedCreateWithoutMockResultInput>
    connectOrCreate?: MockCreateOrConnectWithoutMockResultInput
    connect?: MockWhereUniqueInput
  }

  export type MockUpdateOneRequiredWithoutMockResultNestedInput = {
    create?: XOR<MockCreateWithoutMockResultInput, MockUncheckedCreateWithoutMockResultInput>
    connectOrCreate?: MockCreateOrConnectWithoutMockResultInput
    upsert?: MockUpsertWithoutMockResultInput
    connect?: MockWhereUniqueInput
    update?: XOR<XOR<MockUpdateToOneWithWhereWithoutMockResultInput, MockUpdateWithoutMockResultInput>, MockUncheckedUpdateWithoutMockResultInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MockCreateWithoutSessionsInput = {
    id?: string
    subject: string
    instructions: string
    clerkID: string
    totalTimeMins: number
    createdAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutMockInput
    MockResult?: MockResultCreateNestedManyWithoutMockInput
  }

  export type MockUncheckedCreateWithoutSessionsInput = {
    id?: string
    subject: string
    instructions: string
    clerkID: string
    totalTimeMins: number
    createdAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutMockInput
    MockResult?: MockResultUncheckedCreateNestedManyWithoutMockInput
  }

  export type MockCreateOrConnectWithoutSessionsInput = {
    where: MockWhereUniqueInput
    create: XOR<MockCreateWithoutSessionsInput, MockUncheckedCreateWithoutSessionsInput>
  }

  export type AnswerCreateWithoutSessionInput = {
    id?: string
    mockID: string
    question: QuestionCreateNestedOneWithoutAnswerInput
    option: OptionCreateNestedOneWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutSessionInput = {
    id?: string
    questionID: string
    optionID: string
    mockID: string
  }

  export type AnswerCreateOrConnectWithoutSessionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutSessionInput, AnswerUncheckedCreateWithoutSessionInput>
  }

  export type AnswerCreateManySessionInputEnvelope = {
    data: AnswerCreateManySessionInput | AnswerCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type MockUpsertWithoutSessionsInput = {
    update: XOR<MockUpdateWithoutSessionsInput, MockUncheckedUpdateWithoutSessionsInput>
    create: XOR<MockCreateWithoutSessionsInput, MockUncheckedCreateWithoutSessionsInput>
    where?: MockWhereInput
  }

  export type MockUpdateToOneWithWhereWithoutSessionsInput = {
    where?: MockWhereInput
    data: XOR<MockUpdateWithoutSessionsInput, MockUncheckedUpdateWithoutSessionsInput>
  }

  export type MockUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    totalTimeMins?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutMockNestedInput
    MockResult?: MockResultUpdateManyWithoutMockNestedInput
  }

  export type MockUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    totalTimeMins?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutMockNestedInput
    MockResult?: MockResultUncheckedUpdateManyWithoutMockNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutSessionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutSessionInput, AnswerUncheckedUpdateWithoutSessionInput>
    create: XOR<AnswerCreateWithoutSessionInput, AnswerUncheckedCreateWithoutSessionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutSessionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutSessionInput, AnswerUncheckedUpdateWithoutSessionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutSessionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutSessionInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: StringFilter<"Answer"> | string
    questionID?: StringFilter<"Answer"> | string
    optionID?: StringFilter<"Answer"> | string
    clerkID?: StringFilter<"Answer"> | string
    mockID?: StringFilter<"Answer"> | string
  }

  export type QuestionCreateWithoutMockInput = {
    id?: string
    number: number
    content: string
    marks: number
    negativeMarks: number
    correctOptionNumber: number
    options?: OptionCreateNestedManyWithoutQuestionInput
    correctOption?: OptionCreateNestedOneWithoutCorrectForInput
    Answer?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutMockInput = {
    id?: string
    number: number
    content: string
    marks: number
    negativeMarks: number
    correctOptionNumber: number
    correctOptionID?: string | null
    options?: OptionUncheckedCreateNestedManyWithoutQuestionInput
    Answer?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutMockInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutMockInput, QuestionUncheckedCreateWithoutMockInput>
  }

  export type QuestionCreateManyMockInputEnvelope = {
    data: QuestionCreateManyMockInput | QuestionCreateManyMockInput[]
    skipDuplicates?: boolean
  }

  export type MockSessionCreateWithoutMockInput = {
    id?: string
    clerkID: string
    createdAt?: Date | string
    Answer?: AnswerCreateNestedManyWithoutSessionInput
  }

  export type MockSessionUncheckedCreateWithoutMockInput = {
    id?: string
    clerkID: string
    createdAt?: Date | string
    Answer?: AnswerUncheckedCreateNestedManyWithoutSessionInput
  }

  export type MockSessionCreateOrConnectWithoutMockInput = {
    where: MockSessionWhereUniqueInput
    create: XOR<MockSessionCreateWithoutMockInput, MockSessionUncheckedCreateWithoutMockInput>
  }

  export type MockSessionCreateManyMockInputEnvelope = {
    data: MockSessionCreateManyMockInput | MockSessionCreateManyMockInput[]
    skipDuplicates?: boolean
  }

  export type MockResultCreateWithoutMockInput = {
    id?: string
    createdAt?: Date | string
    clerkID: string
    totalMarks: number
    timeTakenSecs: number
    resultsJson: JsonNullValueInput | InputJsonValue
  }

  export type MockResultUncheckedCreateWithoutMockInput = {
    id?: string
    createdAt?: Date | string
    clerkID: string
    totalMarks: number
    timeTakenSecs: number
    resultsJson: JsonNullValueInput | InputJsonValue
  }

  export type MockResultCreateOrConnectWithoutMockInput = {
    where: MockResultWhereUniqueInput
    create: XOR<MockResultCreateWithoutMockInput, MockResultUncheckedCreateWithoutMockInput>
  }

  export type MockResultCreateManyMockInputEnvelope = {
    data: MockResultCreateManyMockInput | MockResultCreateManyMockInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutMockInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutMockInput, QuestionUncheckedUpdateWithoutMockInput>
    create: XOR<QuestionCreateWithoutMockInput, QuestionUncheckedCreateWithoutMockInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutMockInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutMockInput, QuestionUncheckedUpdateWithoutMockInput>
  }

  export type QuestionUpdateManyWithWhereWithoutMockInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutMockInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    number?: IntFilter<"Question"> | number
    content?: StringFilter<"Question"> | string
    marks?: IntFilter<"Question"> | number
    negativeMarks?: IntFilter<"Question"> | number
    correctOptionNumber?: IntFilter<"Question"> | number
    correctOptionID?: StringNullableFilter<"Question"> | string | null
    mockID?: StringFilter<"Question"> | string
  }

  export type MockSessionUpsertWithWhereUniqueWithoutMockInput = {
    where: MockSessionWhereUniqueInput
    update: XOR<MockSessionUpdateWithoutMockInput, MockSessionUncheckedUpdateWithoutMockInput>
    create: XOR<MockSessionCreateWithoutMockInput, MockSessionUncheckedCreateWithoutMockInput>
  }

  export type MockSessionUpdateWithWhereUniqueWithoutMockInput = {
    where: MockSessionWhereUniqueInput
    data: XOR<MockSessionUpdateWithoutMockInput, MockSessionUncheckedUpdateWithoutMockInput>
  }

  export type MockSessionUpdateManyWithWhereWithoutMockInput = {
    where: MockSessionScalarWhereInput
    data: XOR<MockSessionUpdateManyMutationInput, MockSessionUncheckedUpdateManyWithoutMockInput>
  }

  export type MockSessionScalarWhereInput = {
    AND?: MockSessionScalarWhereInput | MockSessionScalarWhereInput[]
    OR?: MockSessionScalarWhereInput[]
    NOT?: MockSessionScalarWhereInput | MockSessionScalarWhereInput[]
    id?: StringFilter<"MockSession"> | string
    clerkID?: StringFilter<"MockSession"> | string
    mockID?: StringFilter<"MockSession"> | string
    createdAt?: DateTimeFilter<"MockSession"> | Date | string
  }

  export type MockResultUpsertWithWhereUniqueWithoutMockInput = {
    where: MockResultWhereUniqueInput
    update: XOR<MockResultUpdateWithoutMockInput, MockResultUncheckedUpdateWithoutMockInput>
    create: XOR<MockResultCreateWithoutMockInput, MockResultUncheckedCreateWithoutMockInput>
  }

  export type MockResultUpdateWithWhereUniqueWithoutMockInput = {
    where: MockResultWhereUniqueInput
    data: XOR<MockResultUpdateWithoutMockInput, MockResultUncheckedUpdateWithoutMockInput>
  }

  export type MockResultUpdateManyWithWhereWithoutMockInput = {
    where: MockResultScalarWhereInput
    data: XOR<MockResultUpdateManyMutationInput, MockResultUncheckedUpdateManyWithoutMockInput>
  }

  export type MockResultScalarWhereInput = {
    AND?: MockResultScalarWhereInput | MockResultScalarWhereInput[]
    OR?: MockResultScalarWhereInput[]
    NOT?: MockResultScalarWhereInput | MockResultScalarWhereInput[]
    id?: StringFilter<"MockResult"> | string
    createdAt?: DateTimeFilter<"MockResult"> | Date | string
    clerkID?: StringFilter<"MockResult"> | string
    mockID?: StringFilter<"MockResult"> | string
    totalMarks?: IntFilter<"MockResult"> | number
    timeTakenSecs?: IntFilter<"MockResult"> | number
    resultsJson?: JsonFilter<"MockResult">
  }

  export type OptionCreateWithoutQuestionInput = {
    id?: string
    number: number
    content: string
    correctFor?: QuestionCreateNestedOneWithoutCorrectOptionInput
    Answer?: AnswerCreateNestedManyWithoutOptionInput
  }

  export type OptionUncheckedCreateWithoutQuestionInput = {
    id?: string
    number: number
    content: string
    correctFor?: QuestionUncheckedCreateNestedOneWithoutCorrectOptionInput
    Answer?: AnswerUncheckedCreateNestedManyWithoutOptionInput
  }

  export type OptionCreateOrConnectWithoutQuestionInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput>
  }

  export type OptionCreateManyQuestionInputEnvelope = {
    data: OptionCreateManyQuestionInput | OptionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type OptionCreateWithoutCorrectForInput = {
    id?: string
    number: number
    content: string
    question: QuestionCreateNestedOneWithoutOptionsInput
    Answer?: AnswerCreateNestedManyWithoutOptionInput
  }

  export type OptionUncheckedCreateWithoutCorrectForInput = {
    id?: string
    number: number
    content: string
    questionID: string
    Answer?: AnswerUncheckedCreateNestedManyWithoutOptionInput
  }

  export type OptionCreateOrConnectWithoutCorrectForInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutCorrectForInput, OptionUncheckedCreateWithoutCorrectForInput>
  }

  export type MockCreateWithoutQuestionsInput = {
    id?: string
    subject: string
    instructions: string
    clerkID: string
    totalTimeMins: number
    createdAt?: Date | string
    sessions?: MockSessionCreateNestedManyWithoutMockInput
    MockResult?: MockResultCreateNestedManyWithoutMockInput
  }

  export type MockUncheckedCreateWithoutQuestionsInput = {
    id?: string
    subject: string
    instructions: string
    clerkID: string
    totalTimeMins: number
    createdAt?: Date | string
    sessions?: MockSessionUncheckedCreateNestedManyWithoutMockInput
    MockResult?: MockResultUncheckedCreateNestedManyWithoutMockInput
  }

  export type MockCreateOrConnectWithoutQuestionsInput = {
    where: MockWhereUniqueInput
    create: XOR<MockCreateWithoutQuestionsInput, MockUncheckedCreateWithoutQuestionsInput>
  }

  export type AnswerCreateWithoutQuestionInput = {
    id?: string
    mockID: string
    option: OptionCreateNestedOneWithoutAnswerInput
    session: MockSessionCreateNestedOneWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    optionID: string
    clerkID: string
    mockID: string
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type OptionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: OptionWhereUniqueInput
    update: XOR<OptionUpdateWithoutQuestionInput, OptionUncheckedUpdateWithoutQuestionInput>
    create: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput>
  }

  export type OptionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: OptionWhereUniqueInput
    data: XOR<OptionUpdateWithoutQuestionInput, OptionUncheckedUpdateWithoutQuestionInput>
  }

  export type OptionUpdateManyWithWhereWithoutQuestionInput = {
    where: OptionScalarWhereInput
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type OptionScalarWhereInput = {
    AND?: OptionScalarWhereInput | OptionScalarWhereInput[]
    OR?: OptionScalarWhereInput[]
    NOT?: OptionScalarWhereInput | OptionScalarWhereInput[]
    id?: StringFilter<"Option"> | string
    number?: IntFilter<"Option"> | number
    content?: StringFilter<"Option"> | string
    questionID?: StringFilter<"Option"> | string
  }

  export type OptionUpsertWithoutCorrectForInput = {
    update: XOR<OptionUpdateWithoutCorrectForInput, OptionUncheckedUpdateWithoutCorrectForInput>
    create: XOR<OptionCreateWithoutCorrectForInput, OptionUncheckedCreateWithoutCorrectForInput>
    where?: OptionWhereInput
  }

  export type OptionUpdateToOneWithWhereWithoutCorrectForInput = {
    where?: OptionWhereInput
    data: XOR<OptionUpdateWithoutCorrectForInput, OptionUncheckedUpdateWithoutCorrectForInput>
  }

  export type OptionUpdateWithoutCorrectForInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutOptionsNestedInput
    Answer?: AnswerUpdateManyWithoutOptionNestedInput
  }

  export type OptionUncheckedUpdateWithoutCorrectForInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    questionID?: StringFieldUpdateOperationsInput | string
    Answer?: AnswerUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type MockUpsertWithoutQuestionsInput = {
    update: XOR<MockUpdateWithoutQuestionsInput, MockUncheckedUpdateWithoutQuestionsInput>
    create: XOR<MockCreateWithoutQuestionsInput, MockUncheckedCreateWithoutQuestionsInput>
    where?: MockWhereInput
  }

  export type MockUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: MockWhereInput
    data: XOR<MockUpdateWithoutQuestionsInput, MockUncheckedUpdateWithoutQuestionsInput>
  }

  export type MockUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    totalTimeMins?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: MockSessionUpdateManyWithoutMockNestedInput
    MockResult?: MockResultUpdateManyWithoutMockNestedInput
  }

  export type MockUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    totalTimeMins?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: MockSessionUncheckedUpdateManyWithoutMockNestedInput
    MockResult?: MockResultUncheckedUpdateManyWithoutMockNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionCreateWithoutOptionsInput = {
    id?: string
    number: number
    content: string
    marks: number
    negativeMarks: number
    correctOptionNumber: number
    correctOption?: OptionCreateNestedOneWithoutCorrectForInput
    mock: MockCreateNestedOneWithoutQuestionsInput
    Answer?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutOptionsInput = {
    id?: string
    number: number
    content: string
    marks: number
    negativeMarks: number
    correctOptionNumber: number
    correctOptionID?: string | null
    mockID: string
    Answer?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutOptionsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
  }

  export type QuestionCreateWithoutCorrectOptionInput = {
    id?: string
    number: number
    content: string
    marks: number
    negativeMarks: number
    correctOptionNumber: number
    options?: OptionCreateNestedManyWithoutQuestionInput
    mock: MockCreateNestedOneWithoutQuestionsInput
    Answer?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutCorrectOptionInput = {
    id?: string
    number: number
    content: string
    marks: number
    negativeMarks: number
    correctOptionNumber: number
    mockID: string
    options?: OptionUncheckedCreateNestedManyWithoutQuestionInput
    Answer?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutCorrectOptionInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutCorrectOptionInput, QuestionUncheckedCreateWithoutCorrectOptionInput>
  }

  export type AnswerCreateWithoutOptionInput = {
    id?: string
    mockID: string
    question: QuestionCreateNestedOneWithoutAnswerInput
    session: MockSessionCreateNestedOneWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutOptionInput = {
    id?: string
    questionID: string
    clerkID: string
    mockID: string
  }

  export type AnswerCreateOrConnectWithoutOptionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutOptionInput, AnswerUncheckedCreateWithoutOptionInput>
  }

  export type AnswerCreateManyOptionInputEnvelope = {
    data: AnswerCreateManyOptionInput | AnswerCreateManyOptionInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithoutOptionsInput = {
    update: XOR<QuestionUpdateWithoutOptionsInput, QuestionUncheckedUpdateWithoutOptionsInput>
    create: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutOptionsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutOptionsInput, QuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type QuestionUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    negativeMarks?: IntFieldUpdateOperationsInput | number
    correctOptionNumber?: IntFieldUpdateOperationsInput | number
    correctOption?: OptionUpdateOneWithoutCorrectForNestedInput
    mock?: MockUpdateOneRequiredWithoutQuestionsNestedInput
    Answer?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    negativeMarks?: IntFieldUpdateOperationsInput | number
    correctOptionNumber?: IntFieldUpdateOperationsInput | number
    correctOptionID?: NullableStringFieldUpdateOperationsInput | string | null
    mockID?: StringFieldUpdateOperationsInput | string
    Answer?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUpsertWithoutCorrectOptionInput = {
    update: XOR<QuestionUpdateWithoutCorrectOptionInput, QuestionUncheckedUpdateWithoutCorrectOptionInput>
    create: XOR<QuestionCreateWithoutCorrectOptionInput, QuestionUncheckedCreateWithoutCorrectOptionInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutCorrectOptionInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutCorrectOptionInput, QuestionUncheckedUpdateWithoutCorrectOptionInput>
  }

  export type QuestionUpdateWithoutCorrectOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    negativeMarks?: IntFieldUpdateOperationsInput | number
    correctOptionNumber?: IntFieldUpdateOperationsInput | number
    options?: OptionUpdateManyWithoutQuestionNestedInput
    mock?: MockUpdateOneRequiredWithoutQuestionsNestedInput
    Answer?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutCorrectOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    negativeMarks?: IntFieldUpdateOperationsInput | number
    correctOptionNumber?: IntFieldUpdateOperationsInput | number
    mockID?: StringFieldUpdateOperationsInput | string
    options?: OptionUncheckedUpdateManyWithoutQuestionNestedInput
    Answer?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutOptionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutOptionInput, AnswerUncheckedUpdateWithoutOptionInput>
    create: XOR<AnswerCreateWithoutOptionInput, AnswerUncheckedCreateWithoutOptionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutOptionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutOptionInput, AnswerUncheckedUpdateWithoutOptionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutOptionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutOptionInput>
  }

  export type QuestionCreateWithoutAnswerInput = {
    id?: string
    number: number
    content: string
    marks: number
    negativeMarks: number
    correctOptionNumber: number
    options?: OptionCreateNestedManyWithoutQuestionInput
    correctOption?: OptionCreateNestedOneWithoutCorrectForInput
    mock: MockCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutAnswerInput = {
    id?: string
    number: number
    content: string
    marks: number
    negativeMarks: number
    correctOptionNumber: number
    correctOptionID?: string | null
    mockID: string
    options?: OptionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAnswerInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
  }

  export type OptionCreateWithoutAnswerInput = {
    id?: string
    number: number
    content: string
    question: QuestionCreateNestedOneWithoutOptionsInput
    correctFor?: QuestionCreateNestedOneWithoutCorrectOptionInput
  }

  export type OptionUncheckedCreateWithoutAnswerInput = {
    id?: string
    number: number
    content: string
    questionID: string
    correctFor?: QuestionUncheckedCreateNestedOneWithoutCorrectOptionInput
  }

  export type OptionCreateOrConnectWithoutAnswerInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutAnswerInput, OptionUncheckedCreateWithoutAnswerInput>
  }

  export type MockSessionCreateWithoutAnswerInput = {
    id?: string
    clerkID: string
    createdAt?: Date | string
    mock: MockCreateNestedOneWithoutSessionsInput
  }

  export type MockSessionUncheckedCreateWithoutAnswerInput = {
    id?: string
    clerkID: string
    mockID: string
    createdAt?: Date | string
  }

  export type MockSessionCreateOrConnectWithoutAnswerInput = {
    where: MockSessionWhereUniqueInput
    create: XOR<MockSessionCreateWithoutAnswerInput, MockSessionUncheckedCreateWithoutAnswerInput>
  }

  export type QuestionUpsertWithoutAnswerInput = {
    update: XOR<QuestionUpdateWithoutAnswerInput, QuestionUncheckedUpdateWithoutAnswerInput>
    create: XOR<QuestionCreateWithoutAnswerInput, QuestionUncheckedCreateWithoutAnswerInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswerInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswerInput, QuestionUncheckedUpdateWithoutAnswerInput>
  }

  export type QuestionUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    negativeMarks?: IntFieldUpdateOperationsInput | number
    correctOptionNumber?: IntFieldUpdateOperationsInput | number
    options?: OptionUpdateManyWithoutQuestionNestedInput
    correctOption?: OptionUpdateOneWithoutCorrectForNestedInput
    mock?: MockUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    negativeMarks?: IntFieldUpdateOperationsInput | number
    correctOptionNumber?: IntFieldUpdateOperationsInput | number
    correctOptionID?: NullableStringFieldUpdateOperationsInput | string | null
    mockID?: StringFieldUpdateOperationsInput | string
    options?: OptionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type OptionUpsertWithoutAnswerInput = {
    update: XOR<OptionUpdateWithoutAnswerInput, OptionUncheckedUpdateWithoutAnswerInput>
    create: XOR<OptionCreateWithoutAnswerInput, OptionUncheckedCreateWithoutAnswerInput>
    where?: OptionWhereInput
  }

  export type OptionUpdateToOneWithWhereWithoutAnswerInput = {
    where?: OptionWhereInput
    data: XOR<OptionUpdateWithoutAnswerInput, OptionUncheckedUpdateWithoutAnswerInput>
  }

  export type OptionUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutOptionsNestedInput
    correctFor?: QuestionUpdateOneWithoutCorrectOptionNestedInput
  }

  export type OptionUncheckedUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    questionID?: StringFieldUpdateOperationsInput | string
    correctFor?: QuestionUncheckedUpdateOneWithoutCorrectOptionNestedInput
  }

  export type MockSessionUpsertWithoutAnswerInput = {
    update: XOR<MockSessionUpdateWithoutAnswerInput, MockSessionUncheckedUpdateWithoutAnswerInput>
    create: XOR<MockSessionCreateWithoutAnswerInput, MockSessionUncheckedCreateWithoutAnswerInput>
    where?: MockSessionWhereInput
  }

  export type MockSessionUpdateToOneWithWhereWithoutAnswerInput = {
    where?: MockSessionWhereInput
    data: XOR<MockSessionUpdateWithoutAnswerInput, MockSessionUncheckedUpdateWithoutAnswerInput>
  }

  export type MockSessionUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mock?: MockUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type MockSessionUncheckedUpdateWithoutAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    mockID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MockCreateWithoutMockResultInput = {
    id?: string
    subject: string
    instructions: string
    clerkID: string
    totalTimeMins: number
    createdAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutMockInput
    sessions?: MockSessionCreateNestedManyWithoutMockInput
  }

  export type MockUncheckedCreateWithoutMockResultInput = {
    id?: string
    subject: string
    instructions: string
    clerkID: string
    totalTimeMins: number
    createdAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutMockInput
    sessions?: MockSessionUncheckedCreateNestedManyWithoutMockInput
  }

  export type MockCreateOrConnectWithoutMockResultInput = {
    where: MockWhereUniqueInput
    create: XOR<MockCreateWithoutMockResultInput, MockUncheckedCreateWithoutMockResultInput>
  }

  export type MockUpsertWithoutMockResultInput = {
    update: XOR<MockUpdateWithoutMockResultInput, MockUncheckedUpdateWithoutMockResultInput>
    create: XOR<MockCreateWithoutMockResultInput, MockUncheckedCreateWithoutMockResultInput>
    where?: MockWhereInput
  }

  export type MockUpdateToOneWithWhereWithoutMockResultInput = {
    where?: MockWhereInput
    data: XOR<MockUpdateWithoutMockResultInput, MockUncheckedUpdateWithoutMockResultInput>
  }

  export type MockUpdateWithoutMockResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    totalTimeMins?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutMockNestedInput
    sessions?: MockSessionUpdateManyWithoutMockNestedInput
  }

  export type MockUncheckedUpdateWithoutMockResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    totalTimeMins?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutMockNestedInput
    sessions?: MockSessionUncheckedUpdateManyWithoutMockNestedInput
  }

  export type AnswerCreateManySessionInput = {
    id?: string
    questionID: string
    optionID: string
    mockID: string
  }

  export type AnswerUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    mockID?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutAnswerNestedInput
    option?: OptionUpdateOneRequiredWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionID?: StringFieldUpdateOperationsInput | string
    optionID?: StringFieldUpdateOperationsInput | string
    mockID?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionID?: StringFieldUpdateOperationsInput | string
    optionID?: StringFieldUpdateOperationsInput | string
    mockID?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateManyMockInput = {
    id?: string
    number: number
    content: string
    marks: number
    negativeMarks: number
    correctOptionNumber: number
    correctOptionID?: string | null
  }

  export type MockSessionCreateManyMockInput = {
    id?: string
    clerkID: string
    createdAt?: Date | string
  }

  export type MockResultCreateManyMockInput = {
    id?: string
    createdAt?: Date | string
    clerkID: string
    totalMarks: number
    timeTakenSecs: number
    resultsJson: JsonNullValueInput | InputJsonValue
  }

  export type QuestionUpdateWithoutMockInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    negativeMarks?: IntFieldUpdateOperationsInput | number
    correctOptionNumber?: IntFieldUpdateOperationsInput | number
    options?: OptionUpdateManyWithoutQuestionNestedInput
    correctOption?: OptionUpdateOneWithoutCorrectForNestedInput
    Answer?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutMockInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    negativeMarks?: IntFieldUpdateOperationsInput | number
    correctOptionNumber?: IntFieldUpdateOperationsInput | number
    correctOptionID?: NullableStringFieldUpdateOperationsInput | string | null
    options?: OptionUncheckedUpdateManyWithoutQuestionNestedInput
    Answer?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutMockInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    marks?: IntFieldUpdateOperationsInput | number
    negativeMarks?: IntFieldUpdateOperationsInput | number
    correctOptionNumber?: IntFieldUpdateOperationsInput | number
    correctOptionID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MockSessionUpdateWithoutMockInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Answer?: AnswerUpdateManyWithoutSessionNestedInput
  }

  export type MockSessionUncheckedUpdateWithoutMockInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Answer?: AnswerUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type MockSessionUncheckedUpdateManyWithoutMockInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MockResultUpdateWithoutMockInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkID?: StringFieldUpdateOperationsInput | string
    totalMarks?: IntFieldUpdateOperationsInput | number
    timeTakenSecs?: IntFieldUpdateOperationsInput | number
    resultsJson?: JsonNullValueInput | InputJsonValue
  }

  export type MockResultUncheckedUpdateWithoutMockInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkID?: StringFieldUpdateOperationsInput | string
    totalMarks?: IntFieldUpdateOperationsInput | number
    timeTakenSecs?: IntFieldUpdateOperationsInput | number
    resultsJson?: JsonNullValueInput | InputJsonValue
  }

  export type MockResultUncheckedUpdateManyWithoutMockInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkID?: StringFieldUpdateOperationsInput | string
    totalMarks?: IntFieldUpdateOperationsInput | number
    timeTakenSecs?: IntFieldUpdateOperationsInput | number
    resultsJson?: JsonNullValueInput | InputJsonValue
  }

  export type OptionCreateManyQuestionInput = {
    id?: string
    number: number
    content: string
  }

  export type AnswerCreateManyQuestionInput = {
    id?: string
    optionID: string
    clerkID: string
    mockID: string
  }

  export type OptionUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    correctFor?: QuestionUpdateOneWithoutCorrectOptionNestedInput
    Answer?: AnswerUpdateManyWithoutOptionNestedInput
  }

  export type OptionUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    correctFor?: QuestionUncheckedUpdateOneWithoutCorrectOptionNestedInput
    Answer?: AnswerUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type OptionUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    mockID?: StringFieldUpdateOperationsInput | string
    option?: OptionUpdateOneRequiredWithoutAnswerNestedInput
    session?: MockSessionUpdateOneRequiredWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionID?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    mockID?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionID?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    mockID?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerCreateManyOptionInput = {
    id?: string
    questionID: string
    clerkID: string
    mockID: string
  }

  export type AnswerUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    mockID?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutAnswerNestedInput
    session?: MockSessionUpdateOneRequiredWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionID?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    mockID?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUncheckedUpdateManyWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionID?: StringFieldUpdateOperationsInput | string
    clerkID?: StringFieldUpdateOperationsInput | string
    mockID?: StringFieldUpdateOperationsInput | string
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