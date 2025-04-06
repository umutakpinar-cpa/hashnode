export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 text-gray-800">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Umut Akpınar</h1>
        <p className="text-xl mb-6">
          İstanbul Mali Müşavir – Vergi ve Finansal Strateji Uzmanı
        </p>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-2">📘 Nedir? Ne Değildir?</h2>
          <p className="mb-4">
            Mali işler dünyasını sadeleştiren içerik serisi. Kısa, net, doğru bilgi!
          </p>
          <a
            href="/blog"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            İçerikleri Gör
          </a>
        </div>

        <div className="flex gap-4">
          <a
            href="https://umutakpinar.com"
            className="text-blue-600 underline hover:text-blue-800"
          >
            umutakpinar.com
          </a>
          <a
            href="https://vergimerkezi.com.tr"
            className="text-blue-600 underline hover:text-blue-800"
          >
            vergimerkezi.com.tr
          </a>
        </div>
      </section>

      <footer className="mt-16 text-center text-sm text-gray-500">
        İstanbul Mali Müşavir Umut Akpınar – 0532 401 2005
      </footer>
    </main>
  );
}
