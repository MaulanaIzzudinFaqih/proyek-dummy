import Head from "next/head";
import styles from "@/styles/Kalkulator.module.css";
import React, { useState } from "react";

export default function Home() {
	//penjabaran variabel
	const [input1, setInput1] = useState("0");
	const [input2, setInput2] = useState("0");
	const [operation, setOperation] = useState("+");

	// hasil pertambahan
	const pertambahan = parseInt(input1) + parseInt(input2);
	const pengurangan = parseInt(input1) - parseInt(input2);
	const perkalian = parseInt(input1) * parseInt(input2);
	const pembagian = parseInt(input1) / parseInt(input2);

	// operasi kalkulator
	function kalkulator() {
		if (operation == "+") return pertambahan;
		if (operation == "-") return pengurangan;
		if (operation == "*") return perkalian;
		if (operation == "/") return pembagian;
	}

	return (
		<>
			<Head>
				<title> Kalkulator </title>
				<link rel="icon" href="/logo-calculator.png" />
			</Head>

			<main className={styles.main}>
				<div className={styles.deskripsi}>
					<h2>Kalkulator </h2>
				</div>
				<br></br>
				<div className={styles.p}>
					<p>Kalkulator merupakan alat yang membantu kamu untuk berhitung</p>
					<br></br>
					<p>Klik tombol ini untuk menuju salah satu kalkulator</p>
				</div>

				<br></br>

				<div className={styles.tombolkalkulator}>
					<a href="#Kalkulator pertama">
						<button> Kalkulator 1</button>{" "}
					</a>
					<a href="#Kalkulator kedua">
						<button>Kalkulator 2</button>
					</a>
				</div>
				<br></br>
				<br></br>
				<div className={styles.kalkulatorpertama} id="Kalkulator pertama">
					<h2>Kalkulator Pertama</h2>
				</div>
				<div className={styles.pkalkulatorsatu}>
					<button
						onClick={() => {
							setOperation("+");
						}}>
						Pertambahan
					</button>
					<button
						onClick={() => {
							setOperation("-");
						}}>
						Pengurangan
					</button>
					<button
						onClick={() => {
							setOperation("/");
						}}>
						Pembagian
					</button>
					<button
						onClick={() => {
							setOperation("*");
						}}>
						Perkalian
					</button>
				</div>

				<br></br>
				<br></br>
				<div className={styles.pinputkalkulator}>
					<input //props = sebuah properti dalam html tag. (type, id, value, placeholder)
						type="number" // type = angka bukan nomor
						id="input1"
						value={input1}
						placeholder="angka pertama"
						onChange={(e) => setInput1(e.target.value)}
						//onchange termasuk props input, kalo terjadi sesuatu pada html tag input maka akan melakukan sesuatu.
						//e = perubahan dalam input. => artinya ngejalanin sesuatu. setInput => mengubah nilai dari variabel input1.
						//e.target.value = perubahan dalam html tag input
					></input>
					<input
						type="number"
						id="input2"
						value={input2}
						placeholder="angka kedua"
						onChange={(e) => setInput2(e.target.value)}></input>
					<p id="result">{kalkulator()}</p>
				</div>

				<br></br>
				<br></br>
				<div className={styles.kalkulatorkedua} id="Kalkulator kedua">
					<h2>Kalkulator kedua</h2>
				</div>
			</main>
		</>
	);
}
