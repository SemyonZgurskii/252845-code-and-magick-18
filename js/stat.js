'use strict';

var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = 150;
var BAR_GAP = 50;


var getMaxElement = function (arr) {
  var maxElement = 0;
  for (var i = 0; i < arr.length; i++) {
    maxElement = maxElement < arr[i] ? arr[i] : maxElement;
  }
  return maxElement;
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px, PT Mono';
  ctx.fillText('Ура вы победили', CLOUD_X + GAP * 6, GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 6, GAP + FONT_GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var barHeight = times[i] * BAR_MAX_HEIGHT / maxTime;
    var barY = CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP - BAR_MAX_HEIGHT + (BAR_MAX_HEIGHT - barHeight);
    var barColor = 'hsl(235, ' + (Math.random() * 100) + '%, 70%)';
    var barX = CLOUD_X + GAP * 5 + (BAR_WIDTH + BAR_GAP) * i;

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], barX, CLOUD_Y + CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.floor(times[i]), barX, barY - GAP);
    ctx.fillStyle = players[i] === 'Вы' ? 'red' : barColor;
    ctx.fillRect(barX, barY, BAR_WIDTH, barHeight);
  }
};
