/**
 * Daftar direktori untuk dilakukan scanning. Menyeluruh.
 * @type {Array<string>}
 */
let scanDir = ['./konfigurasi', './kipli/halaman', './script']

/**
 * Daftar untuk dikecualikan.
 * @type {Array<string>}
 */
let kecualiFile = ['./siap-jajal.js', 'grom-jajal.css', './konfigurasi/sonda-jajal/heleh.js']

/**
 * Ekstensi untuk dikecualikan.
 * @type {Array<"json" | "css" | "js" | "jsx" | "html">}
 */
let kecualiEkstensi = ['json']

/**
 * Daftar file untuk dirapikan. Tidak berpengaruh meskipun ekstensi masuk pengecualian.
 * @type {Array<string>}
 */
let file = ['./package.json']
