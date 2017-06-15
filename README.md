# jest-expose-global-window

## Usage

```shell-session
$ yarn test

yarn test
yarn test v0.24.6
$ jest
 FAIL  __tests__/jest-test.js
  ● should not defined global.window

    expect(received).toBeUndefined()

    Expected value to be undefined, instead received
```

- [I found `window` is `global` in jest from StackOverflow, but not mention in docs? · Issue #3692 · facebook/jest](https://github.com/facebook/jest/issues/3692 "I found `window` is `global` in jest from StackOverflow, but not mention in docs? · Issue #3692 · facebook/jest")

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/jest-expose-global-window/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
