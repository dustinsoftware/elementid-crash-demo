import Component from '@ember/component';

export default Component.extend({
    updateMe: 'what happens?',
    actions: {
        handleUpdate() {
            this.set('updateMe', 'oh no');
        }
    }
});
