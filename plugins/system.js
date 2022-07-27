import Vue from 'vue'

export default ({ app }, inject) => {
    inject('system', Vue.observable({
        // state
        overlay: false,
        profileMenu: false,
        popupBuy: false,
        // methods 
        // ubah angka ke rupiah
        toRupiah(angka) {
            var rupiah = '';
            var angkarev = angka.toString().split('').reverse().join('');
            for (var i = 0; i < angkarev.length; i++)
                if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
            return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
        },
        // excerpt nama product
        excerpt(str, len) {
            if (str.length > len) {
                return str.substring(0, len) + '...';
            } else {
                return str;
            }
        },
        // push router
        to(path) {
            app.router.push(path);
            this.overlay = false;
            this.profileMenu = false;
        },
        //close overlay
        closeOverlay() {
            this.overlay = false;
            this.profileMenu = false;
        }
    }))
}