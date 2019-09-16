'use strict';

var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
// var CLOUD_X = 100;
// var CLOUD_Y = 10;
var FONT_GAP = 20;


// var getMaxTime = function(times) {
//   var maxTime = 0;
//   for (var i = 0; i < times.length; i++) {
//     maxTime < times[i] ? maxTime = times[i] : maxTime = maxTime;
//   }
//   return maxTime;
// }

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx) {
  renderCloud(ctx, 110, 20, "rgba(0, 0, 0, 0.3)");
  renderCloud(ctx, 100, 10, "#fff");

  ctx.fillStyle = "#000";
  ctx.textBaseline = "hanging";
  ctx.font = "16px, PT Mono";
  ctx.fillText('Ура вы победили', 160, 20);
  ctx.fillText('Список результатов:', 160, 20 + FONT_GAP);

  ctx.transform(1, 0, 0, 1, 0, 0);
  ctx.fillRect(130, 250, 50, 50);
}
