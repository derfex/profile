# `sections` folder

The folder keeps files with data for sections of `profile` application.

## Examples

Most of the properties have `string` type. Their values are used as buttons', headings', labels' texts.

## Code style

Each property name should use a postfix related with type of the value.

- `HTML` for `string` type that needs to be displayed as HTML (after sanitization).
- `Text` for `string` type that needs to be displayed as text with escaping by Angular.
- `URL` for `string` type that can be used as a value of `href` attributes of `<a>` tag for example.
- `XML` for `string` type that needs to be processed in a special way, turning it into several text fragments..
