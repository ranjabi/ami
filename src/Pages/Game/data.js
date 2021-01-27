import React from "react";
export const gameDate = new Date("2021-01-24T09:00:00+07:00");
export const isGameOpen = new Date() >= gameDate;
export const gameClosed = {
    nama: "Game Belum Dibuka",
    message: `Maaf, game akan dibuka pada hari ${new Intl.DateTimeFormat(['id', 'en'], { dateStyle: 'full'}).format(gameDate)} jam ${gameDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })} WIB.`
}
export const menyusunKataLink = "https://forms.gle/rShzBt5XkcWeDwVQ8";
export const gameRules = [
    {
      nama: "PERATURAN POS WAJIB",
      peraturan: (
        <ol>
          <li>
            Peserta memasuki room pos wajib dengan format nama yang telah
            ditentukan.
          </li>
          <li>
            Setelah semua peserta memasuki room pos wajib, peserta akan diarahkan
            untuk membuka website lomba Check the Mission.
          </li>
          <li>
            Game dimulai, website akan menampilkan huruf-huruf yang telah
            ditentukan.
          </li>
          <li>
            Peserta menyusun sebanyak mungkin kata-kata baru yang ditemukan dari
            huruf-huruf yang ditampilkan dan harus sesuai dengan KBBI.
          </li>
          <li>
            Peserta diberikan waktu 10 menit untuk mengerjakan misi pos wajib
            (menyusun dan mengirim), terhitung setelah panitia mempersilakan
            memulai kegiatan.
          </li>
          <li>
            Perwakilan setiap tim mengumpulkan kata baru yang telah ditemukan pada
            link google form yang diberikan oleh panitia.
          </li>
          <li>
            Setiap kata yang benar sesuai dengan huruf-huruf yang ditampilkan dan
            sesuai dengan KBBI diberikan poin (+10).
          </li>
          <li>
            Setiap kata yang salah dan tidak sesuai dengan KBBI akan diberi poin
            (0).
          </li>
          <li>
            Poin yang didapatkan oleh setiap tim akan ditampilkan di dalam room
            pos wajib.
          </li>
          <li>
            Poin yang berhasil dikumpulkan oleh setiap tim akan menjadi modal awal
            untuk mengikuti pos selanjutnya.
          </li>
          <li>
            Setelah mengetahui poin awal, setiap tim akan mendapatkan urutan untuk
            memasuki pos 1, 2, 3, dan 4.
          </li>
          <li>
            Peserta diharapkan dapat memperhatikan urutan memasuki pos yang
            didapat oleh tim masing-masing.
          </li>
          <li>
            Setelah mendapatkan alur memasuki pos, peserta diperbolehkan untuk
            menuju pos selanjutnya.
          </li>
        </ol>
      ),
    },
    {
      nama: "POS 1: TEBAK GAMBAR",
      link: "https://meet.google.com/icv-cunu-bvk",
      peraturan: (
        <ol>
          <li>
            Peserta memasuki room tebak gambar dengan menggunakan format nama yang
            telah ditentukan.
          </li>
          <li>Game dimulai setelah seluruh peserta memasuki room.</li>
          <li>Setiap anggota tim berhak untuk menjawab soal.</li>
          <li>
            Peserta dapat menekan tombol raise hand pada google meet untuk
            menjawab pertanyaan.
          </li>
          <li>
            Peserta diberikan waktu 30 detik untuk menekan tombol raise hand.
            Apabila dalam 30 detik tidak ada peserta yang raise hand, maka soal
            hangus.
          </li>
          <li>
            Peserta yang paling cepat menekan tombol raise hand berhak mendapatkan
            kesempatan pertama untuk menjawab soal.
          </li>
          <li>
            Peserta yang mendapatkan kesempatan menjawab pertama diberikan waktu
            30 detik untuk menjawab soal, apabila jawaban benar akan mendapatkan 5
            poin dan salah akan diberikan sanksi berupa pengurangan sebesar 2
            poin.
          </li>
          <li>
            Apabila penjawab kesempatan pertama salah menjawab, soal akan dilempar
            kepada peserta dengan raise hand kedua tercepat.
          </li>
          <li>
            Apabila peserta yang mendapat kesempatan kedua dapat menjawab dengan
            benar akan mendapatkan 3 poin dan menjawab salah akan diberikan sanksi
            berupa pengurangan sebesar 2 poin.
          </li>
          <li>
            Setelah game selesai, panitia akan mengakumulasikan dan menampilkan
            poin masing-masing tim.
          </li>
          <li>
            Setiap tim diberikan kode unik yang akan disatukan dengan kode unik
            yang didapat pada pos 2, 3, dan 4 untuk membuka pos terakhir.
          </li>
          <li>
            Peserta dipersilahkan meninggalkan room tebak gambar dan menuju room
            selanjutnya.
          </li>
        </ol>
      ),
    },
    {
      nama: "POS 2: BENAR ATAU SALAH",
      link: "https://meet.google.com/wvp-xgbz-joa",
      peraturan: (
        <ol>
          <li>
            Peserta memasuki room pos benar atau salah dengan format nama yang
            telah ditentukan.
          </li>
          <li>
            Setiap tim menunjuk 1 perwakilan sebagai juru bicara yang akan
            menyampaikan jawaban setiap soal.
          </li>
          <li>
            Perwakilan tim diminta mempersiapkan kertas dan alat tulis untuk
            menuliskan jawaban.
          </li>
          <li>
            Perwakilan tim diwajibkan open camera untuk menunjukkan jawaban yang
            telah disepakati dalam tim.
          </li>
          <li>Game akan dimulai ketika semua tim telah siap.</li>
          <li>
            Peserta diberi waktu 30 detik untuk menjawab setiap soal, dimulai saat
            soal ditampilkan.
          </li>
          <li>
            Perwakilan tim menuliskan jawaban pada kertas dengan menulis “BENAR”
            apabila menjawab benar, “SALAH” apabila menjawab salah, dan “-”
            apabila tidak menjawab.
          </li>
          <li>
            Perwakilan tim menunjukkan jawaban setelah waktu yang diberikan untuk
            menjawab selesai.
          </li>
          <li>
            Panitia akan merekap ulang jawaban peserta pada kolom chat room.
          </li>
          <li>
            Jawaban benar mendapatkan poin (+5), salah mendapatkan poin (-2), dan
            tidak menjawab mendapatkan poin (0).
          </li>
          <li>
            Setelah game selesai, setiap tim diberikan kode unik yang akan
            disatukan dengan kode unik yang didapat pada pos 1,3, dan 4 untuk
            membuka pos terakhir.
          </li>
          <li>Game selesai, peserta dipersilahkan meninggalkan room.</li>
        </ol>
      ),
    },
    {
      nama: "POS 3: PUZZLE",
      link: "https://meet.google.com/exb-duyi-fju",
      peraturan: (
        <ol>
          <li>
            Peserta wajib memasuki pos dengan format nama yang telah ditentukan.
          </li>
          <li>
            Peserta wajib mengunduh seluruh potongan puzzle melalui link yang
            diberikan.
          </li>
          <li>
            Peserta dibebaskan menggunakan aplikasi apa saja untuk menyusun
            puzzle.
          </li>
          <li>
            Jawaban yang diupload berupa tangkapan layar penuh aplikasi yang
            digunakan, hasil puzzle yang telah disusun, dan terlihat jam selesai
            pengerjaan.
          </li>
          <li>
            Jawaban diupload oleh satu orang perwakilan kelompok melalui link
            google form yang diberikan.
          </li>
          <li>
            Jawaban tidak akan diterima apabila :
            <ul>
              <li>
                Melebihi batas waktu pengumpulan (10 menit, mencakup pengerjaan
                dan pengiriman)
              </li>
              <li>Tidak memenuhi format pengumpulan gambar</li>
              <li>Dikumpulkan lebih dari satu kali</li>
            </ul>
          </li>
          <li>
            Poin akan dihitung berdasarkan tiap potongan puzzle yang disusun,
            apabila diletakkan dengan benar diberi poin (+5). Apabila salah atau
            tidak meletakkan puzzle diberi poin (0).
          </li>
          <li>
            Peserta dilarang melakukan/merencanakan kecurangan. Apabila didapati
            melakukan kecurangan oleh panitia, maka tim tersebut akan langsung
            didiskualifikasi dari pos.
          </li>
          <li>
            Setelah game selesai, setiap tim diberikan kode unik yang akan
            disatukan dengan kode unik yang didapat pada pos 1, 2, dan 4 untuk
            membuka pos terakhir.
          </li>
          <li>Game selesai, peserta dipersilahkan meninggalkan room.</li>
        </ol>
      ),
    },
    {
      nama: "POS 4: TTS",
      link: "https://meet.google.com/tzp-bzwb-hsv",
      peraturan: (
        <ol>
          <li>Peserta memasuki pos dengan format nama yang telah ditentukan.</li>
          <li>
            Peserta akan diberi link teka teki silang yang mencakup link soal dan
            pengumpulan jawaban.
          </li>
          <li>Peserta wajib mengunduh soal yang terdapat pada link soal.</li>
          <li>
            Perwakilan tim wajib mengisi nama anggota kelompok dan asal sekolah
            pada kolom yang sudah disediakan.
          </li>
          <li>
            Isikan semua kolom dan lajur pada teka-teki silang dengan jawaban yang
            tepat.
          </li>
          <li>
            Peserta diberi waktu 10 menit untuk mengisi teka teki silang, waktu
            terhitung saat link teka teki silang diberikan.
          </li>
          <li>Jawaban dikumpulkan dengan format (.pdf).</li>
          <li>
            Peserta hanya diperbolehkan mengirimkan jawaban satu kali, tidak ada
            revisi pada pengumpulan jawaban.
          </li>
          <li>
            Apabila peserta dua kali mengirimkan jawaban, maka jawaban pertama
            yang akan dianggap sebagai jawaban tim.
          </li>
          <li>
            Setiap nomor jawaban yang benar akan diberi poin (+5), poin (-2) jika
            salah, dan poin (0) jika tidak diisi.
          </li>
          <li>
            Peserta yang mengirim jawaban terlambat atau lebih dari 10 menit, akan
            dikurangi 5 poin per menitnya.
          </li>
          <li>
            Peserta dilarang melakukan/merencanakan kecurangan. Apabila didapati
            oleh panitia telah terjadi kecurangan, maka tim tersebut akan langsung
            didiskualifikasi dari pos.
          </li>
          <li>
            Setelah game selesai, setiap tim diberikan kode unik yang akan
            disatukan dengan kode unik yang didapat pada pos 1, 2, dan 3 untuk
            membuka pos terakhir.
          </li>
          <li>Game selesai, peserta dipersilahkan meninggalkan room.</li>
        </ol>
      ),
    },
    {
      nama: "POS 5: TEST YOUR BRAIN",
      to: "/games/final",
      endto: "/games/finish",
      peraturan: (
        <ol>
          <li>
            Setiap peserta memasuki pos quizizz dengan format nama yang telah
            ditentukan.
          </li>
          <li>Game quizizz diikuti oleh seluruh anggota tim.</li>
          <li>
            Semua peserta diarahkan menuju website quizizz.com dan diberikan kode
            untuk memasuki room quizizz melalui kolom chat.
          </li>
          <li>
            Setelah memasukkan kode, peserta memasukkan nama dengan format “Tim
            (Angka)_Nama” dan menekan tombol mulai. Contoh: Tim 05-Adinda
          </li>
          <li>
            Ketika semua peserta telah bergabung, operator akan memulai permainan.
          </li>
          <li>
            Peserta akan menjawab 20 soal yang sudah disediakan (durasi setiap
            soal 30 detik).
          </li>
          <li>
            Poin yang didapat oleh peserta akan disesuaikan dengan keakuratan dan
            kecepatan dalam menjawab soal.
          </li>
          <li>
            Skor maksimal setiap peserta adalah 20.000 poin. Total seluruh poin
            per tim maksimal adalah 60.000, poin akhir akan dikonversi menjadi
            ratusan (dibagi 600).
          </li>
          <li>
            Setelah menyelesaikan misi, ketua tim harap mengumpulkan capture skor
            yang didapat oleh setiap anggota.
          </li>
          <li>
            Ketua tim mengirim skor yang diperoleh setiap anggota tim ke alamat
            email panitia: aldoyogakhalifah@gmail.com (Total terdapat 3 bukti yang
            harus dikirim).
          </li>
          <li>
            Peserta dipersilahkan meninggalkan pos quizizz jika permainan sudah
            selesai.
          </li>
        </ol>
      ),
    },
  ];
  