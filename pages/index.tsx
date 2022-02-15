import Header from 'components/Header'

const HomePage = () => {
  return (
    <>
      <Header />
      <section>
        <hgroup>
          <h1>Clarke&apos;s Modern Playground</h1>
          <h2 className="subtitle">Let&apos;s get your IT ready for battle</h2>
        </hgroup>
        <p>Your partner for awesome digital solutions</p>
      </section>
      <footer>If there is a header, there must be a footer...?</footer>
    </>
  )
}

export async function getStaticProps() {
  return { props: { templateName: 'template-home' } }
}

export default HomePage
