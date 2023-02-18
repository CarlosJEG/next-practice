import styles from '@/styles/chartDetail.module.scss'

const chartDetails = ({ detail }) => {
    return (
        <div className={styles.container}>
            <img src={detail.image} alt="image" />
            <div>
                <p>name: {detail.name}</p>
                <p>status: {detail.status}</p>
                <p>origin: {detail.origin.name}</p>
                <p>location: {detail.location.name}</p>
            </div>
        </div>
    )
}

export async function getStaticProps(context) {

    const { id } = context.params
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const detail = await res.json()

    return {
        props: {
            detail
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: {id: "1"}},
            { params: {id: "2"}},
            { params: {id: "3"}},
            { params: {id: "4"}},
            { params: {id: "5"}},
            { params: {id: "6"}},
            { params: {id: "7"}},
            { params: {id: "8"}},
            { params: {id: "9"}},
            { params: {id: "10"}},
            { params: {id: "11"}},
            { params: {id: "12"}},
            { params: {id: "13"}},
            { params: {id: "14"}},
            { params: {id: "15"}},
            { params: {id: "16"}},
            { params: {id: "17"}},
            { params: {id: "18"}},
            { params: {id: "19"}},
            { params: {id: "20"}},
        ],
        fallback: false
    }
}

export default chartDetails