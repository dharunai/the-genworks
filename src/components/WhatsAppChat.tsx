import { MessageCircle, X, Send } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showTyping, setShowTyping] = useState(false);
    const [showMessages, setShowMessages] = useState(false);
    const whatsappNumber = "918870981415"; // +91 8870981415

    useEffect(() => {
        if (isOpen) {
            // Show typing indicator after opening
            setTimeout(() => setShowTyping(true), 500);
            // Show messages after typing
            setTimeout(() => {
                setShowTyping(false);
                setShowMessages(true);
            }, 2000);
        } else {
            setShowTyping(false);
            setShowMessages(false);
        }
    }, [isOpen]);

    const handleQuickReply = (message: string) => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    const quickReplies = [
        { text: "Tell me about your services", message: "Hi Gen! I'd like to know more about your services." },
        { text: "Start a project", message: "Hi Gen! I'm interested in starting a project with TheGenWorks." },
        { text: "Just say hi", message: "Hi Gen!" },
    ];

    return (
        <>
            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-6 right-6 z-50">
                {isOpen && (
                    <div className="mb-4 animate-scale-in">
                        <div className="bg-gradient-to-br from-card via-card to-muted border-2 border-primary/50 rounded-2xl shadow-2xl max-w-sm overflow-hidden">
                            {/* Header with Logo */}
                            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border p-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <div className="w-18 h-18 bg-card rounded-full flex items-center justify-center p-2 border-2 border-primary/30">
                                                <img src="/gen-logo.png" alt="Gen" className="w-full h-full object-contain" />
                                            </div>
                                            {/* Online indicator */}
                                            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-secondary rounded-full border-2 border-card" />
                                        </div>
                                        <div>
                                            <h3 className="font-rubik font-bold text-base text-foreground">Gen</h3>
                                            <p className="font-inter text-xs text-secondary flex items-center gap-1">
                                                <span className="w-2 h-2 bg-secondary rounded-full" />
                                                Online now
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-colors"
                                    >
                                        <X className="w-5 h-5 text-secondary" />
                                    </button>
                                </div>
                            </div>

                            {/* Chat Messages */}
                            <div className="p-4 space-y-3 min-h-[200px] max-h-[300px] overflow-y-auto">
                                {/* Gen's Message */}
                                <div className="flex items-start gap-2 animate-fade-in">
                                    <div className="w-11 h-11 rounded-full bg-card border border-primary/30 flex items-center justify-center flex-shrink-0 p-2">
                                        <img src="/gen-logo.png" alt="Gen" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="bg-muted/70 rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                                        <p className="font-inter text-sm text-foreground leading-relaxed">
                                            Hey there! I'm <span className="font-bold text-primary">Gen</span>, your AI assistant at TheGenWorks!
                                        </p>
                                    </div>
                                </div>

                                {/* Typing Indicator */}
                                {showTyping && (
                                    <div className="flex items-start gap-2 animate-fade-in">
                                        <div className="w-9 h-9 rounded-full bg-card border border-primary/30 flex items-center justify-center flex-shrink-0 p-1.5">
                                            <img src="/gen-logo.png" alt="Gen" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="bg-muted/70 rounded-2xl rounded-tl-sm p-3">
                                            <div className="flex gap-1">
                                                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Second Message */}
                                {showMessages && (
                                    <div className="flex items-start gap-2 animate-fade-in">
                                        <div className="w-9 h-9 rounded-full bg-card border border-primary/30 flex items-center justify-center flex-shrink-0 p-1.5">
                                            <img src="/gen-logo.png" alt="Gen" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="bg-muted/70 rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                                            <p className="font-inter text-sm text-foreground leading-relaxed">
                                                How can I help you today?
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Quick Reply Buttons */}
                            {showMessages && (
                                <div className="p-4 pt-0 space-y-2 animate-fade-in">
                                    {quickReplies.map((reply, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleQuickReply(reply.message)}
                                            className="w-full bg-muted/50 hover:bg-primary/20 border border-border hover:border-primary/50 rounded-xl p-3 transition-all duration-300 hover:scale-[1.02] flex items-center gap-3 group"
                                        >
                                            <span className="font-inter text-sm text-foreground group-hover:text-primary transition-colors flex-1 text-left">
                                                {reply.text}
                                            </span>
                                            <Send className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Footer */}
                            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-t border-border p-3">
                                <p className="font-inter text-xs text-center text-muted-foreground">
                                    Powered by <span className="text-primary font-semibold">TheGenWorks</span> • We reply instantly
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Chat Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative group"
                    aria-label="Chat with Gen"
                >
                    {/* Subtle glow effect only on main button */}
                    {!isOpen && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                    )}

                    {/* Button */}
                    <div className="relative w-16 h-16 bg-gradient-to-br from-primary via-primary to-secondary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer">
                        {isOpen ? (
                            <X className="w-7 h-7 text-primary-foreground" />
                        ) : (
                            <MessageCircle className="w-7 h-7 text-primary-foreground" />
                        )}
                    </div>

                    {/* Notification Badge */}
                    {!isOpen && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-xs font-bold text-secondary-foreground">1</span>
                        </div>
                    )}

                    {/* Tooltip */}
                    {!isOpen && (
                        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <div className="bg-card border border-primary/50 rounded-lg px-3 py-2 shadow-xl whitespace-nowrap">
                                <p className="font-inter text-xs text-foreground font-semibold">Chat with Gen</p>
                            </div>
                        </div>
                    )}
                </button>
            </div>
        </>
    );
};

export default WhatsAppChat;
