export default rapikan

/**
 * Daftar direktori untuk dilakukan scanning. Menyeluruh.
 * @typedef {Array<string>} ScanDir
 */
 
/**
 * Daftar file untuk dikecualikan.
 * @typedef {Array<string>} KecualiFile
 */

/**
 * Ekstensi untuk dikecualikan.
 * @typedef {Array<"json" | "css" | "js" | "jsx" | "html">} KecualiEkstensi
 */

/**
 * Daftar file untuk dirapikan. Tidak berpengaruh meskipun ekstensi masuk pengecualian.
 * @typedef {Array<string>} File
 */

/**
 * Tipe parameter `medan` untuk fungsi `rapikan`. 
 * @typedef {Object} Medan
 * @property {ScanDir} scanDir - Daftar direktori untuk melakukan scan file. Menyeluruh.
 * @property {KecualiFile} kecualiFile - Daftar file untuk dikecualikan.
 * @property {KecualiEkstensi} kecualiEkstensi - Daftar ekstensi untuk dikecualikan.
 * @property {File} file - Daftar file untuk tetap dirapikan meskipun ekstensi dikecualiklan.
 */
 
/**
 * Tipe parameter `pola` untuk fungsi `rapikan`. Lihat https://prettier.io/docs/options/.
 * @typedef {Object} Pola
 * @property {Object} js - Pola konfigurasi untuk file JS.
 * @property {Object} jsx - Pola konfigurasi untuk file JSX.
 * @property {Object} css - Pola konfigurasi untuk file CSS.
 * @property {Object} html - Pola konfigurasi untuk file HTML.
 * @property {Object} json - Pola konfigurasi untuk file JSON.
 */

/**
 * Fungsi untuk merapikan kode.
 * @param {String} pusat - Direktori untuk memulai pemindaian.
 * @param {Medan} medan - Daftar direktori dan file untuk dirapikan.
 * @param {Pola} pola - Obyek pola konfigurasi.
 */
function rapikan(pusat, medan, pola) {
    cek()
    format()
}

function cek() {
    
}
