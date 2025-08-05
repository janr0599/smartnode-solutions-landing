import { Logos } from "./Logos";

function InfiniteLogos() {
    return (
        <section className="relative overflow-hidden">
            <div className="pt-10">
                <h2 className="text-center text-xl font-semibold text-gray-700 mb-8">
                    Some of the tools we use to build your automation
                </h2>
                <Logos />
            </div>
        </section>
    );
}

export default InfiniteLogos;
