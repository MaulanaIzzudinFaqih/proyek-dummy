import Head from 'next/head'
import styles from '@/styles/quiz.module.css'
import { useState } from 'react'

export default function Home () {

    //buat input nama dan hasil
    const [nama, setNama]= useState("")
    const [hasil, setHasil] = useState(0)
    const [pertanyaansaatini, setPertanyaanSaatIni] = useState(0)
    const [showHasilAkhir, setHasilAkhir] = useState(false)
  

    
    // pertanyaan
    const pertanyaan = [
      {
        text: "Dimanakah Faqih berkuliah?",
        options: [
          {id: 0, text : "Medan", isBenar: false},
          {id: 1, text : "Bandung", isBenar: false},
          {id: 2, text : "Surabaya", isBenar: false},
          {id: 3, text : "Malang", isBenar: true},
        ],
      },
      {
        text: "Dimanakah Asa berkuliah?",
        options: [
          {id : 0, text : "Solo", isBenar: true},
          {id : 1, text : "Surakarta", isBenar: false},
          {id : 2, text : "Surabaya", isBenar: false},
          {id : 3, text : "Malang", isBenar: false},
        ],
      },
      {
        text: "Jurusan apa yang diambil oleh Faqih?",
        options: [
          {id : 0, text : "Sastra Mesin", isBenar: false},
          {id : 1, text : "Teknik Aktuaria", isBenar: false},
          {id : 2, text : "Peternakan", isBenar: true},
          {id : 3, text : "Pertanian", isBenar: false},
        ],
      },
      {
        text: "Jurusan apa yang diambil oleh Asa",
        options: [
          {id : 0, text : "Sastra Mesin", isBenar: true},
          {id : 1, text : "Teknik Aktuaria", isBenar: false},
          {id : 2, text : "Teknik Informatika", isBenar: true},
          {id : 3, text : "Pertanian", isBenar: false},
        ],
      },
      {
        text: "Faqih sekarang statusnya apa?",
        options: [
          {id : 0, text : "Single", isBenar: true},
          {id : 1, text : "HTS", isBenar: false},
          {id : 2, text : "Taken", isBenar: false},
          {id : 3, text : "Semua Jawaban Salah", isBenar: false},
        ],
      },
    ]

    // penentuan benar atau salah
    const optionsClicked = (isBenar) => {
      if(isBenar) {
        setHasil(hasil + 20);
      }
      
      if (pertanyaansaatini + 1 < pertanyaan.length) {
        setPertanyaanSaatIni(pertanyaansaatini + 1);
      } else {
        setHasilAkhir(true);
      }
    }

    // penentuan nilai dibawah 50
    const finalscore = (hasil) => {
      if(hasil > 50 ) {
        return "Selamat, "
      } else {
        return "Tetap Semangat, "
      }
    }

    // mulai dari awal
    const mulaiKembali = () => {
      setHasil(0);
      setPertanyaanSaatIni(0);
      setHasilAkhir(false)
    }
    
    return (
      <>
        <Head>
         <title>Quiz</title>
         <link rel='icon' href='/logo-quiz.png'/>
        </Head>

        <main className={styles.main}>
          {/* ini buat judul quiz */}
          <div className={styles.deskripsi}>
            <h2>
              {showHasilAkhir ? (<></>) : (
              <>
              Welcome to Quiz!
              <p className={styles.p}>Silahkan ketik namamu di bawah ini</p>
              </>
              )}
            </h2>
          </div>

          {showHasilAkhir ? (<></>) : (

            <div className={styles.inputNama}>
           <input 
            className={styles.inputNama}
            type='string'
            placeholder='Nama'
            onChange={(e) => setNama(e.target.value)}
            value={nama}
            />
          </div>
          )}
          <br/>

          { showHasilAkhir ? (

          /* Kolom hasil */
          <div className={styles.kolomhasil}>
            <h2
              onChange ={(e) => {setNama(e.target.value)}}>{finalscore(hasil)} {nama}!</h2>
            <h3>Kamu mendapat nilai {hasil} dari {(pertanyaan.length)*20}</h3>
            <button 
             className={styles.tombolkembali}
             onClick={() => mulaiKembali()}>
              Mulai kembali
              </button>
          </div>

          ) : ( 
          
          /* Pertanyaan */
            <div className={styles.kolompertanyaan}>
            <h2>Soal dari {pertanyaansaatini + 1} sampe {pertanyaan.length}</h2>
            <h3>{pertanyaan[pertanyaansaatini].text}</h3>
            <ul className={styles.ul}>
             {pertanyaan[pertanyaansaatini].options.map((options) => {
               return (
                 <li 
                 className={styles.li}
                 key={options.id}
                 onClick={() => optionsClicked(options.isBenar)}
                 >{options.text}</li>
                 );
                })}
            </ul>
          </div>
          )}      
          <br/>
         </main>
        </>

    )
}