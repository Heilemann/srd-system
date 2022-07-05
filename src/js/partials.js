/**
 * It's possible to define partials similarly to how helpers are defined. This is an example.
 * See https://handlebarsjs.com/guide/#partials for more information.
 *
 * The partials should be a varible named `partials` of the type `object`, the keys of which
 * should be the name of the partial, and the values should be the partial itself.
 */

const partials = {
	header: '<h1>{{title}}</h1>',

	baseStyle: `<style>
    body {
      margin: 0;
      padding: 20px;
    }

    * {
      outline: 1px solid red;
    }
  </style > `,
}
