fly.actions({
    'cl-tabview': {
        'SetTab': {
            event: function(element, value)
            {
                var thisTabview = new tabview(element);
                thisTabview.setTab(value);
            }
        }
    }
});
fly.runAll();
console.log('Fly has completed!')
