function animate(obj, target, callback) {
    // 先清楚原有定时器，只保留当前定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 把步长值改为整数，避免小数问题
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer)
                // 回调函数写在计时器结束位置
            if (callback) {
                callback();
            }
        } else {
            // 把1改为缓动步长公式
            obj.style.left = obj.offsetLeft + step + 'px';
        }

    }, 15);
}