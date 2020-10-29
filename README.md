# Web-AMI21

WebDev IT AMI caww
ini README yang dibuat agak buru-buru dan belom di-test, jadi kalo error coba cek stackoverflow, google, atau tanya di grup

## Short Desc

Aku Masuk ITB (AMI) merupakan salah satu program dibawah Kementrian Koordinator Pengembangan Sosial Kemasyarakatan KM ITB yang bergerak untuk membawa semarak melanjutkan pendidikan tinggi dan menyebarkan informasi mengenai dunia perkuliahan kepada siswa/siswi SMA/sederajat. Program tersebut diharapkan dapat meningkatkan angka partisipasi siswa yang melanjutkan pendidikan ke perguruan tinggi.
Ini adalah github repo untuk bagian frontend, bagian backend ada di [sini](https://github.com/ravielze/ami-2021-be) (Private repo).

## Quick Installation
- Pastiin udah ada [NodeJS](https://nodejs.org/en/), download yang LTS cukup.
- Harus udah ada [Git](https://git-scm.com/) juga lah ya
- clone repo ini 
```
git clone https://github.com/Chris-Ivan/Web-AMI21 frontend-ami
cd frontend-ami
git remote add origin https://github.com/Chris-Ivan/Web-AMI21 frontend-ami
npm install
```

## Development Mode
Buat development, pertama masuk ke branch Development dulu.
```
git checkout development
```
Kalo masih ga yakin ada di branch mana, bisa coba
`git status`, di situ bakal keliatan lagi di branch mana.
Jaga-jaga aja kalo ada yg update codenya di remote, coba
`git pull origin master`

buat nyalain servernya di PC masing-masing tinggal
```npm start```
(pastiin ga salah folder di terminal).
Habis itu (biasanya) bakal kebuka [http://localhost:3000](http://localhost:3000) di browser.
Kalau ada error akibat NPM Dependenciesnya ga lengkap, bisa `npm install` di terminal trus coba lagi.
kalau mau matiin servernya tinggal Ctrl+C.

Kalo udah selesai ngedit codenya,
```
git add .
git commit -m "tulis di sini apa yang diubah"
git push origin development
```
Hasil pushnya bakal auto nge-update konten di [dev.akumasukitb.com](https://dev.akumasukitb.com/) yang di-host di Netlify, tapi tolong sabar kalo ga langsung ke-update. Kalo udah agak lama (10+ menit) ga ke update, mungkin bisa kabarin di grup.

Kalo codenya udah fix dan siap di-merge sama website aslinya:
```
git checkout master
git add .
git commit -m "tulis pesan"
git push origin master
```

## API
Sejauh ini, API yang bisa dipake ada di [api.akumasukitb.com](https://api.akumasukitb.com/) dan baru ada 2 (per 23 Nov)
- GET, POST | [https://api.akumasukitb.com/api/cerita](https://api.akumasukitb.com/api/cerita)
- GET | [https://api.akumasukitb.com/api/fakultas](https://api.akumasukitb.com/api/fakultas)
