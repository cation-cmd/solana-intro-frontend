import type { NextPage } from "next"
import { useState } from "react"
import styles from "../styles/Home.module.css"
import AddressForm from "../components/AddressForm"
import * as anchor from "@project-serum/anchor"

const Home: NextPage = () => {
  const [balance, setBalance] = useState(0)
<<<<<<< HEAD
  const [address, setAddress] = useState('')
  const [isExecutable, setIsExecutable] = useState(true);
||||||| 4a8b1d2
  const [address, setAddress] = useState('')
=======
  const [address, setAddress] = useState("")
>>>>>>> cdd77a8aae5dba1f77e8fe58bfe69f32060acbf3

  const addressSubmittedHandler = (address: string) => {
    try {
      setAddress(address)
      const key = new anchor.web3.PublicKey(address)
      const connection = new anchor.web3.Connection(
        anchor.web3.clusterApiUrl("devnet")
      )
      connection.getBalance(key).then((balance) => {
        setBalance(balance / anchor.web3.LAMPORTS_PER_SOL)
      })
    } catch (error) {
      setAddress("")
      setBalance(0)
      alert(error)
    }
  }

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <p>Start Your Solana Journey</p>
        <AddressForm handler={addressSubmittedHandler} />
        <p>{`Address: ${address}`}</p>
        <p>{`Balance: ${balance} SOL`}</p>
        <p>{`Is it executable? ${isExecutable ? 'Yep' : 'Nope'}`}</p>
      </header>
    </div>
  )
}

export default Home
