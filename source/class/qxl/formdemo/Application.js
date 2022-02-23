/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */

qx.Class.define("qxl.formdemo.Application", {
  extend: qx.application.Standalone,

  members: {
    __items: null,

    main() {
      super.main();

      this.__items = new qxl.formdemo.FormItems();
      this.getRoot().add(this.__items);
    },
  },

  destruct() {
    this.__items.destroy();
  },
});
