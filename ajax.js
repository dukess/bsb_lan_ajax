/**
 * Анонимная самовызывающаяся функция-обертка
 * @param {document} d - получает документ


  Разработка https://web3r.ru/js-css-alerts

 */
!function(d) {

  "use strict";

  /**
   * Полифилл для Object.assign()
   */
  Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e,r){"use strict";if(null==e)throw new TypeError("Cannot convert first argument to object");for(var t=Object(e),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o)for(var a=Object.keys(Object(o)),c=0,b=a.length;c<b;c++){var i=a[c],l=Object.getOwnPropertyDescriptor(o,i);void 0!==l&&l.enumerable&&(t[i]=o[i])}}return t}});

  /**
   * Полифилл для Element.remove()
   */
  "remove" in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});

  /**
   * Основная функция.
   * @param {Object} [settings] - предвартиельные настройки
   */
  window.note = function(settings) {

    /**
     * Настройки по умолчанию
     */
    settings = Object.assign({},{
      callback:    false,
      content:     "",
      time:        4.5,
      type:        "info"
    }, settings);

    if(!settings.content.length) return;

    /**
     * Функция создания элементов
     * @param {String} name - название DOM-элемента
     * @param {Object} attr - объект с атрибутами
     * @param {Object} append - DOM-элемент, в который будет добавлен новый узел
     * @param {String} [content] - контент DOM-элемента
     */
    var create = function(name, attr, append, content) {
      var node = d.createElement(name);
      for(var val in attr) { if(attr.hasOwnProperty(val)) node.setAttribute(val, attr[val]); }
      if(content) node.insertAdjacentHTML("afterbegin", content);
      append.appendChild(node);
      if(node.classList.contains("note-item-hidden")) node.classList.remove("note-item-hidden");
      return node;
    };

    /**
     * Генерация элементов
     */
    var noteBox = d.getElementById("notes") || create("div", { "id": "notes" }, d.body);
    var noteItem = create("div", {
        "class": "note-item",
        "data-show": "false",
        "role": "alert",
        "data-type": settings.type
      }, noteBox),
      noteItemText = create("div", { "class": "note-item-text" }, noteItem, settings.content),
      noteItemBtn = create("button", {
        "class": "note-item-btn",
        "type": "button",
        "aria-label": "Скрыть"
      }, noteItem);

    /**
     * Функция проверки видимости алерта во viewport
     * @returns {boolean}
     */
    var isVisible = function() {
      var coords = noteItem.getBoundingClientRect();
      return (
        coords.top >= 0 &&
        coords.left >= 0 &&
        coords.bottom <= (window.innerHeight || d.documentElement.clientHeight) &&
        coords.right <= (window.innerWidth || d.documentElement.clientWidth)
      );
    };

    /**
     * Функция удаления алертов
     * @param {Object} [el] - удаляемый алерт
     */
    var remove = function(el) {
      el = el || noteItem;
      el.setAttribute("data-show","false");
      window.setTimeout(function() {
        el.remove();
      }, 250);
      if(settings.callback) settings.callback(); // callback
    };

    /**
     * Удаление алерта по клику на кнопку
     */
    noteItemBtn.addEventListener("click", function() { remove(); });

    /**
     * Визуальный вывод алерта
     */
    window.setTimeout(function() {
      noteItem.setAttribute("data-show","true");
    }, 250);


    /**
     * Проверка видимости алерта и очистка места при необходимости
     */
    if(!isVisible()) remove(noteBox.firstChild);

    /**
     * Автоматическое удаление алерта спустя заданное время
     */
    window.setTimeout(remove, settings.time * 1000);

  };

}(document);
