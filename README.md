# angular-livetemplates

AngularJS live templates for Jetbrains IDEs like IntelliJ IDEA, PhpStorm or WebStorm.

## Templates

* [Angular Module](ngmo.tmpl.js)
* [Angular Config](ngcf.tmpl.js)
* [Angular Run](ngru.tmpl.js)
* [Angular Factory](ngfa.tmpl.js)
* [Angular Controller](ngct.tmpl.js) (utilizing controllerAs vm)
* [Angular Directive](ngdi.tmpl.js) (generic)

### Unit test templates
* [General test suite](ng.spec.tmpl.js)
* [Controller test suite](ngct.spec.tmpl.js)
* [Directive test suite](ngdi.spec.tmpl.js)
* [Filter test suite](ngfi.spec.tmpl.js)
* [Service test suite](ngse.spec.tmpl.js)

## Installation

Installation is currently just possible by hand. JetBrains IDEs provide an integrated Import/Export functionality which is based on JAR files. However, it is not possible to exports a custom subset of all live templates. Hints for a better workflow are appreciated.

1. Open Settings
2. Editor → Live Templates
3. Select Section `AngularJS`
4. Click the `+` button
5. Define a `Abbrevation` and `Description`
6. Paste the appropriate live template into `Template text`
7. Check box "Reformat code according to style" (optional)
8. Select context `JavaScript → Statement`
9. Hit `Apply` and start using it!

