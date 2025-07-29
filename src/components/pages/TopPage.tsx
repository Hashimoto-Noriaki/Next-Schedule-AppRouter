export function TopPage(){
    return(
        <div className="relative">
            <header className="fixed bg-white leading-[80px] top-0 right-0 left-0 flex flex-col items-center justify-center">
                <div className="mx-auto container flex justify-between">
                    <p className="logo">スケジュール管理App</p>
                    <nav>
                        <ul className="flex gap-5 font-bold text-sky-400">
                            <li className="hover:text-sky-700 hover:underline transition">利用説明</li>
                            <li className="hover:text-sky-700 hover:underline transition">新規登録</li>
                            <li className="hover:text-sky-700 hover:underline transition">ログイン</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="bg-gradient-to-r from-sky-400 to-sky-500 flex flex-col items-center justify-center h-screen">
                <div className="text-center">
                    <h1 className="logo text-7xl">スケジュール管理</h1>
                    <p className="pt-[30px] font-bold text-3xl">このアプリは、スケジュールを管理するためのアプリです。</p>
                    <p className="pt-[30px] font-bold text-3xl">ユーザーは、スケジュールを登録、編集、削除することができます。</p>
                    <p className="pt-[30px] font-bold text-3xl">また、スケジュールをカレンダー形式で表示することができます。</p>
                </div>
                <div className="pt-[20vh]">
                    <button className="bg-emerald-600 px-12 py-5 rounded-full text-white w-[400px] shadow-lg  hover:bg-emerald-400 transition">
                        ログイン
                    </button>
                </div>
            </main>
        </div>
    )
}