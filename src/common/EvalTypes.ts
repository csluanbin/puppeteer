/**
 * Copyright 2020 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { JSHandle } from './JSHandle';

/**
 * @public
 */
export type EvaluateFn<T = any> = string | ((arg1: T, ...args: any[]) => any);
/**
 * @public
 */
export type EvaluateFnReturnType<T extends EvaluateFn> = T extends (
  ...args: any[]
) => infer R
  ? R
  : unknown;

/**
 * @public
 */
export type Serializable =
  | number
  | string
  | boolean
  | null
  | JSONArray
  | JSONObject;

/**
 * @public
 */
export type JSONArray = Serializable[];

/**
 * @public
 */
export interface JSONObject {
  [key: string]: Serializable;
}

/**
 * @public
 */
export type SerializableOrJSHandle = Serializable | JSHandle;
