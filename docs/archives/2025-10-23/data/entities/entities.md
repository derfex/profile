# `entities` folder

The folder keeps files with data for entities of `student` application.

## Code style

Usually there are several entities, so each file contains an array of objects as an optional rule.

Each object in its array must have the same set of properties. Avoid using approaches where an object requires an optional field, because explicit is better than implicit.

It is preferable to have a unique key property (`id`) for each object in the `entities` folder.

Any property should not have HTML markup as a value. Therefore, the postfix `HTML` or `Text` must not be used in the name of each property. The `URL` postfix is allowed.
