import User from "../user";
import user from "../user";

test("should not throw any error", () => {
  expect(() => {
    new User(user);
  }).not.toThrow();
});
