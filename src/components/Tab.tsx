type TabProps = {
    num: number;
    activeTab: number;
    onClick: (n: number) => void;
};

const Tab = ({ num, activeTab, onClick }: TabProps) => {
    return (
        <button
            className={activeTab === num ? "tab active" : "tab"}
            onClick={() => onClick(num)}
        >
            Tab {num + 1}
        </button>
    );
};

export default Tab;
