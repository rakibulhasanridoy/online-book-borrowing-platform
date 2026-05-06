import BookDetails from "@/Components/BookDetails";


export default async function BookPage({ params }) {
  const { id } = await params;
  return <BookDetails id={id} />;
}