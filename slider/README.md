1. npm install

2. npm start - to run local server

3. npm run build - to create build

Main function path: "slider/src/components/slider.js".

The slider has several features:

1. Cycling
2. Change of direction
3. Change of cycling interval
4. Stop cycling on mouse over and start when mouse leaves
5. Supports swipe on Desktops and Mobile
6. Supports infinite option
7. Supports scrolling to a selected slide (you need to click on any indicator from the bottom)
8. Adaptive
9. Supports any HTML content

Example:
mySlider('.slider', '.slider\_\_wrap', '.slider\*\*wrap--item',{
cycling: true/false, - 1
direction: 'left'/'right', - 2
interval: 4000(any numeric value), - 3
pause: true/false - 4
swipeOnDesk: false - 5
})

!!!!When calling the function you should to specify your slider class, items wrapper class and items class
