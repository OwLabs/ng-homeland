import { MessageCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function SectionC() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-[#0B2545] mb-4">Still have questions?</h2>
                <p className="text-gray-600 mb-10">
                    Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 text-left hover:shadow-lg transition-shadow border-t-4 border-t-[#3B82F6]">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                            <MessageCircle className="w-6 h-6 text-[#3B82F6]" />
                        </div>
                        <h3 className="font-semibold text-[#0B2545] mb-2">Chat with us</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Get real-time assistance from our support team.
                        </p>
                        <Button variant="outline" className="w-full text-[#3B82F6] border-[#3B82F6] hover:bg-[#3B82F6] hover:text-white">
                            Start Live Chat
                        </Button>
                    </Card>

                    <Card className="p-6 text-left hover:shadow-lg transition-shadow border-t-4 border-t-[#0B2545]">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                            <Mail className="w-6 h-6 text-[#0B2545]" />
                        </div>
                        <h3 className="font-semibold text-[#0B2545] mb-2">Email Support</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Send us an email and we&apos;ll get back to you within 24 hours.
                        </p>
                        <Button variant="outline" className="w-full text-[#0B2545] border-[#0B2545] hover:bg-[#0B2545] hover:text-white">
                            support@neuralguru.my
                        </Button>
                    </Card>
                </div>
            </div>
        </section>
    )
}
