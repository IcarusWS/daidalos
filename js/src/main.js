fly.actions({
    'cl-tabview': {
        'SetTab': {
            event: function(element, value)
            {
                var thisTabview = new tabview(element);
                thisTabview.setTab(value);
                delete thisTabview;
            }
        }
    }
});
fly.runAll();
console.log('Fly has completed!')
