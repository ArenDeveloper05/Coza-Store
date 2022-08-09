import BaseTitleImage from "../../components/common/baseTitleImage/BaseTitleImage"
import Layout from "../../components/layout/Layout"
import PageBg from "../../assets/pageBackgroundImages/blog-page.jpg"

const BlogPage = () => {
  return (
    <Layout>
            <main className="page-main">
                <BaseTitleImage title="Blog" image={ PageBg } />
                <div className="page-main-wrapper ">
                </div>
            </main>
    </Layout>
  )
}

export default BlogPage