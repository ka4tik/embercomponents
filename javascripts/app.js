App = Ember.Application.create({
    LOG_TRANSITIONS:true,
    LOG_TRANSITIONS_INTERNAL:true,
    LOG_VIEW_LOOKUPS:true,
    LOG_ACTIVE_GENERATION:true
});

App.Router.map(function() {
    this.resource("application", { path:"/" });
});

