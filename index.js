let line = SVG('#line')

line
    .attr({x2 : 161, display:"none"})
line
    .animate(1000,0,'now')
    .attr({ display : "true", x2 : 677 })
    .ease('>:').loop()
    
