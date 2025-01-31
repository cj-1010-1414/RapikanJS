// File ini dieksekusi dari folder ini

// import node
import { join } from 'node:path'

import rapikan from '../indeks.js'

// pusat menjadi direktori utama pustaka ini
const pusat = join(import.meta.dirname, '../..')



rapikan(pusat)
