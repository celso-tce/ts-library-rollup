import { bar } from "./bar";

// is exported by index.ts therefore should be visible by api users
export function foo() {
  return bar();
}
