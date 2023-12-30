import Vue from 'vue';
import VModal from 'vue-js-modal/dist/ssr.nocss';
import 'vue-js-modal/dist/styles.css';

Vue.use(VModal, {
    dynamic: true,
    injectModalsContainer: true,
    dynamicDefaults: {
        // clickToClose: false,
        height: 'auto',
        adaptive: true,
        scrollable: true,
        styles: { borderRadius: '1rem',},
    },
});


