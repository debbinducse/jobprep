import { ExamPaper } from '../types/exam';

export const assistantProgrammerPapers: ExamPaper[] = [
  // 1. Bangladesh Bank Assistant Programmer (Official BB / BIBM Written Paper)
  {
    id: 'ap-bangladesh-bank',
    title: 'Assistant Programmer, Bangladesh Bank — Official Written Question Paper',
    searchQuery: 'Assistant Programmer Bangladesh Bank written question solution pdf',
    category: 'Bank Assistant Programmer',
    jobId: 'BB-AP-2024',
    circularYear: '2023-2024',
    examDate: 'February 10, 2024',
    examBody: 'Bangladesh Bank / BIBM',
    participatingBanks: ['Bangladesh Bank (Central Bank of Bangladesh)'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Official Bangladesh Bank Format — 200 Marks)',
    summary: 'Official Bangladesh Bank Assistant Programmer (Grade-9) Written Examination Paper. Structured into Part 1 (Questions 1–5: Bangla & English Focus Writing, Translation, and Analytical Math — 50 Marks) and Part 2 (Question 6: 10 Subject Related CSE/IT Questions 6.1–6.10 covering C Pointer Output Tracing, C++ Operator Overloading rules, SQL query on Movies/Genres/HasGenre for romantic comedy, Second-Highest Salary SQL, Subnetting 32 subnets from 192.168.1.0/24 and finding subnet address for 192.168.16.10, Min-Heap construction, Floyd-Warshall All-Pairs Shortest Path, and High-Availability Active-Active vs Active-Passive Clustering — 150 Marks).',
    keyTopics: [
      'C Pointer Output Trace (*p = *p + 10)',
      'C++ Non-Overloadable Operators (., .*, ::, ?:, sizeof)',
      'SQL Movies/Genres/HasGenre (romantic comedy)',
      'SQL Second-Highest Salary Per Department',
      'Subnetting 32 Subnets (/29) & Subnet Address',
      'Min-Heap O(N) Build Algorithm',
      'Floyd-Warshall All-Pairs Shortest Path',
      'Active-Active vs Active-Passive HA & Split-Brain',
      'Stateful Inspection vs Stateless Firewalls'
    ],
    sections: [
      {
        id: 'sec-bb-ap-general',
        name: 'Part 1: Focus Writing, Translation & Analytical Math (Questions 1–5) — 50 Marks',
        marks: 50,
        description: 'Official Bangladesh Bank Part 1: Focus Writing in Bangla & English, Passage Translation, and Analytical Math (5 x 10 = 50 Marks).',
        questions: [
          {
            id: 'q-bb-ap-1',
            questionNo: '1',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `Focus Writing in Bangla (10 Marks):
দেশের সামষ্টিক অর্থনৈতিক স্থিতিশীলতা এবং নিরাপদ আন্তঃব্যাংক লেনদেন ব্যবস্থাপনায় বাংলাদেশ ব্যাংকের তথ্যপ্রযুক্তি অবকাঠামোর ভূমিকা।`,
            solution: `দেশের সামষ্টিক অর্থনৈতিক স্থিতিশীলতা এবং নিরাপদ আন্তঃব্যাংক লেনদেন ব্যবস্থাপনায় বাংলাদেশ ব্যাংকের তথ্যপ্রযুক্তি অবকাঠামোর ভূমিকা

১. ভূমিকা:
বাংলাদেশের কেন্দ্রীয় ব্যাংক হিসেবে বাংলাদেশ ব্যাংক কেবল মুদ্রানীতি প্রণয়নই করে না, বরং দেশের সমগ্র ব্যাংকিং ও আর্থিক খাতের ডিজিটাল লেনদেনের মূল মেরুদণ্ড (Backbone) পরিচালনা করে।

২. জাতীয় পেমেন্ট সিস্টেম ও অটোমেশন:
বাংলাদেশ ব্যাংকের তত্ত্বাবধানে পরিচালিত অটোমেটেড ক্লিয়ারিং হাউস (BACPS), ইলেকট্রনিক ফান্ড ট্রান্সফার (BEFTN), রিয়েল-টাইম গ্রস সেটেলমেন্ট (RTGS) এবং ন্যাশনাল পেমেন্ট সুইচ বাংলাদেশ (NPSB) দেশের লাখ লাখ গ্রাহক ও ব্যবসাপ্রতিষ্ঠানের আন্তঃব্যাংক লেনদেনকে কয়েক সেকেন্ডের মধ্যে নিষ্পত্তি করছে।

৩. ক্রেডিট ইনফরমেশন ব্যুরো (CIB) ও সাইবার রেজিলিয়েন্স:
সিআইবি (CIB) অনলাইন ডেটাবেজের মাধ্যমে ঋণগ্রহীতাদের খেলাপি তথ্য তাৎক্ষণিক যাচাই করা সম্ভব হচ্ছে, যা ব্যাংকিং খাতে ঝুঁকি হ্রাসে অপরিহার্য। পাশাপাশি কেন্দ্রীয় ব্যাংকের সোসাইটি ফর ওয়ার্ল্ডওয়াইড ইন্টারব্যাংক ফাইন্যান্সিয়াল টেলিকমিউনিকেশন (SWIFT) গেটওয়ে ও কোর সিস্টেমের নিরাপত্তায় ২৪/৭ সিকিউরিটি অপারেশনস সেন্টার (SOC) কার্যকর ভূমিকা পালন করছে।`,
            tags: ['Focus Writing Bangla', 'Bangladesh Bank', 'RTGS', 'NPSB'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb-ap-2',
            questionNo: '2',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `Focus Writing in English (10 Marks):
"The Role of the Central Bank in Governing Cyber Risk and Resilient National Payment Systems."`,
            solution: `Focus Writing: The Role of the Central Bank in Governing Cyber Risk and Resilient National Payment Systems

As the apex regulatory authority of Bangladesh's financial sector, Bangladesh Bank serves as the guardian of national payment infrastructure and financial cyber resilience. Modern economic activity depends heavily on high-availability platforms such as BACPS, BEFTN, BD-RTGS, and NPSB.

To govern systemic cyber risk across all scheduled commercial banks and non-bank financial institutions (NBFIs), the central bank enforces strict regulatory standards through the ICT Security Guidelines. Key pillars include mandatory 24/7 Security Operations Centers (SOC), regular Vulnerability Assessment and Penetration Testing (VAPT), strict network segmentation for SWIFT and RTGS endpoints, encrypted off-site Disaster Recovery (DR) replication, and real-time threat intelligence sharing across financial institutions.`,
            tags: ['Focus Writing English', 'Central Bank', 'Cyber Risk Governance'],
            marks: 10,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb-ap-3',
            questionNo: '3',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `Translate into English (10 Marks):
"বাংলাদেশ ব্যাংক দেশের আর্থিক খাতের স্থিতিশীলতা রক্ষায় নিয়মিত তদারকি ও পরিদর্শন পরিচালনা করে। সাইবার ঝুঁকি ব্যবস্থাপনায় কোনো ধরনের অবহেলা পরিলক্ষিত হলে সংশ্লিষ্ট প্রতিষ্ঠানের বিরুদ্ধে কঠোর প্রশাসনিক ব্যবস্থা গ্রহণ করা হয়।"`,
            solution: `English Translation:
"Bangladesh Bank conducts regular supervision and inspections to safeguard the stability of the country's financial sector. If any negligence is observed in cyber risk management, strict administrative measures are taken against the respective institution."`,
            tags: ['Translation', 'Bangla to English', 'Bangladesh Bank'],
            marks: 10,
            difficulty: 'Easy'
          },
          {
            id: 'q-bb-ap-4',
            questionNo: '4',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `Translate into Bangla (10 Marks):
"High availability and fault tolerance are mandatory requirements for central banking software systems. Even a few minutes of unplanned downtime in the national payment switch can disrupt millions of retail and corporate transactions across the country."`,
            solution: `Bangla Translation:
"কেন্দ্রীয় ব্যাংকের সফটওয়্যার সিস্টেমগুলোর জন্য হাই অ্যাভেইলেবিলিটি (উচ্চ প্রাপ্যতা) এবং ফল্ট টলারেন্স (ত্রুটি সহনশীলতা) বাধ্যতামূলক শর্ত। ন্যাশনাল পেমেন্ট সুইচে মাত্র কয়েক মিনিটের অপরিকল্পিত বিভ্রাটও সারাদেশে লক্ষ লক্ষ খুচরা ও কর্পোরেট লেনদেনকে ব্যাহত করতে পারে।"`,
            tags: ['Translation', 'English to Bangla', 'High Availability'],
            marks: 10,
            difficulty: 'Easy'
          },
          {
            id: 'q-bb-ap-5',
            questionNo: '5.1 – 5.2',
            type: 'math',
            topicCategory: 'Focus Writing & Language',
            questionText: `Analytical Mathematics (2 x 5 = 10 Marks):
5.1 A software development team of 12 programmers can complete a core banking module in 30 days working 8 hours a day. How many days will it take for 16 programmers to complete a module twice as large if they work 9 hours a day?
5.2 Three pipes A, B, and C can fill a tank in 6 hours. After working at it together for 2 hours, pipe C is closed and A and B can fill the remaining part in 7 hours. Find the number of hours taken by pipe C alone to fill the tank.`,
            solution: `Solution to 5.1:
- Total work in programmer-hours for the first module = 12 programmers * 30 days * 8 hours/day = 2,880 programmer-hours.
- Since the second module is twice as large, required work = 2 * 2,880 = 5,760 programmer-hours.
- Daily programmer-hours of 16 programmers working 9 hours/day = 16 * 9 = 144 programmer-hours/day.
- Number of days required = 5,760 / 144 = 40 days.

Solution to 5.2:
- Part filled by (A + B + C) in 1 hour = 1/6.
- Part filled by (A + B + C) in 2 hours = 2 * (1/6) = 1/3.
- Remaining part of the tank = 1 - 1/3 = 2/3.
- (A + B) fill 2/3 of the tank in 7 hours -> Part filled by (A + B) in 1 hour = (2/3) / 7 = 2/21.
- Therefore, part filled by C alone in 1 hour = (A + B + C)'s 1-hr work - (A + B)'s 1-hr work
  = 1/6 - 2/21 = (7 - 4) / 42 = 3 / 42 = 1 / 14.
- Hence, pipe C alone can fill the tank in 14 hours.`,
            tags: ['Written Math', 'Time and Work', 'Bangladesh Bank AP'],
            marks: 10,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-bb-ap-tech',
        name: 'Part 2: 6. Subject Related Questions (6.1–6.10) — (10 x 15 = 150 Marks)',
        marks: 150,
        description: 'Official Bangladesh Bank Assistant Programmer / AD(IT) Subject Related CSE Questions (150 Marks).',
        questions: [
          {
            id: 'q-bb-ap-6-1',
            questionNo: '6.1',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: `Determine the exact output of the following C program and explain the pointer pass-by-address mechanism step-by-step:
#include <stdio.h>
int fun(int *p) {
    *p = *p + 10;
    return *p;
}
int main() {
    int a = 5;
    int b = fun(&a);
    printf("a = %d, b = %d\\n", a, b);
    return 0;
}`,
            solution: `Step-by-Step Execution Trace:
1. In main(), integer variable 'a' is initialized to 5.
2. fun(&a) is called by passing the memory address of 'a' (&a) to pointer parameter 'int *p'.
3. Inside fun(int *p):
   - '*p = *p + 10' dereferences pointer p, modifying the value stored at variable 'a' directly in memory from 5 to (5 + 10) = 15.
   - 'return *p' returns the updated value 15, which is assigned to 'b' in main().
4. Therefore, both 'a' and 'b' hold the value 15.

Exact Printed Output:
a = 15, b = 15`,
            tags: ['C Programming', 'Pointers', 'Call by Reference', 'Bangladesh Bank Real Question'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-bb-ap-6-2',
            questionNo: '6.2',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'What is Operator Overloading in C++? List the operators in C++ that CANNOT be overloaded. Write a C++ class Complex that overloads the binary "+" operator to add two complex numbers.',
            solution: `1. Operator Overloading in C++:
Compile-time polymorphism that allows standard C++ operators (+, -, *, ==, <<) to have user-defined meanings when applied to class objects.

2. Operators in C++ That CANNOT Be Overloaded (5 Key Operators):
(i) '.' (Member access / Dot operator)
(ii) '.*' (Pointer-to-member operator)
(iii) '::' (Scope resolution operator)
(iv) '?:' (Ternary / Conditional operator)
(v) 'sizeof' (Object size operator) and 'typeid'`,
            codeSolution: `#include <iostream>
using namespace std;

class Complex {
private:
    double real, imag;
public:
    Complex(double r = 0.0, double i = 0.0) : real(r), imag(i) {}

    // Overload binary '+' operator
    Complex operator+(const Complex& rhs) const {
        return Complex(this->real + rhs.real, this->imag + rhs.imag);
    }

    void display() const {
        cout << real << " + " << imag << "i" << endl;
    }
};

int main() {
    Complex c1(3.5, 2.5), c2(1.5, 4.0);
    Complex c3 = c1 + c2;
    c3.display(); // Outputs: 5 + 6.5i
    return 0;
}`,
            solutionLanguage: 'cpp',
            tags: ['C++', 'OOP', 'Operator Overloading', 'Bangladesh Bank Real Question'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-bb-ap-6-3',
            questionNo: '6.3',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: `Consider the following three relational tables from an entertainment database:
Movies(mid, title)
Genres(gid, genre)
HasGenre(mid, gid)
Write an SQL query to retrieve the movie IDs (mid) and titles of all movies that belong to the genre 'romantic comedy', sorted alphabetically by movie title.`,
            solution: `We perform an INNER JOIN across Movies, HasGenre, and Genres using their foreign key relationships (Movies.mid = HasGenre.mid and HasGenre.gid = Genres.gid), filter with WHERE Genres.genre = 'romantic comedy', and sort by Movies.title ASC.`,
            codeSolution: `SELECT 
    m.mid,
    m.title
FROM Movies m
INNER JOIN HasGenre hg ON m.mid = hg.mid
INNER JOIN Genres g ON hg.gid = g.gid
WHERE g.genre = 'romantic comedy'
ORDER BY m.title ASC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Multi-Table Join', 'Bangladesh Bank Real Question'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-bb-ap-6-4',
            questionNo: '6.4',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: `(a) You are given the Class C IPv4 network 192.168.1.0/24 and need to divide it into 32 equal subnets. What is the new subnet mask in slash notation and dotted-decimal notation, and how many usable hosts are supported per subnet?
(b) Find the Subnet (Network) Address and Broadcast Address for a host with IP address 192.168.16.10 and subnet mask 255.255.255.248 (/29).`,
            solution: `Solution to Part (a):
- Base network: 192.168.1.0/24
- Required subnets = 32 = 2^5 -> Borrow 5 bits from the 8-bit host portion.
- New CIDR prefix = /24 + 5 = /29.
- Dotted-decimal subnet mask:
  Last octet has 5 ones and 3 zeros: 11111000_2 = 128 + 64 + 32 + 16 + 8 = 248.
  Subnet Mask = 255.255.255.248.
- Remaining host bits = 8 - 5 = 3 bits.
- Usable hosts per subnet = 2^3 - 2 = 8 - 2 = 6 usable hosts per subnet.

Solution to Part (b):
- Host IP: 192.168.16.10
- Subnet Mask: 255.255.255.248 (/29) -> Block size in 4th octet = 256 - 248 = 8.
- Multiples of block size 8 in the 4th octet: 0, 8, 16, 24, ...
- Since 10 falls in the range [8 to 15]:
  * Subnet (Network) Address = 192.168.16.8/29
  * Usable Host IP Range = 192.168.16.9 to 192.168.16.14
  * Broadcast Address = 192.168.16.15`,
            tags: ['Networking', 'Subnetting /29', 'Bangladesh Bank Real Question'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb-ap-6-5',
            questionNo: '6.5',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write an algorithm or C program to convert an unsorted array of integers into a Min-Heap (Heapify process). Analyze its Big-O time complexity.',
            solution: `Building a Min-Heap bottom-up starts from the last non-leaf node at index floor(N/2) - 1 down to root index 0, calling minHeapify() at each node. Although a single minHeapify() takes O(log N) in the worst case, the tight mathematical bound across all tree heights is O(N) linear time.`,
            codeSolution: `#include <stdio.h>

void minHeapify(int arr[], int n, int i) {
    int smallest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] < arr[smallest])
        smallest = left;
    if (right < n && arr[right] < arr[smallest])
        smallest = right;

    if (smallest != i) {
        int temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;
        minHeapify(arr, n, smallest);
    }
}

void buildMinHeap(int arr[], int n) {
    for (int i = (n / 2) - 1; i >= 0; i--) {
        minHeapify(arr, n, i);
    }
}`,
            solutionLanguage: 'c',
            tags: ['Data Structures', 'Min-Heap', 'C Programming', 'Bangladesh Bank AP'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb-ap-6-6',
            questionNo: '6.6',
            type: 'descriptive',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Explain the Dynamic Programming approach to solve the All-Pairs Shortest Path (APSP) problem using the Floyd-Warshall Algorithm. Show the recurrence relation and state its time and space complexity.',
            solution: `1. Dynamic Programming Formulation:
Let d[k][i][j] represent the length of the shortest path from vertex i to vertex j using only intermediate vertices from the subset {1, 2, ..., k}.
- Base Case (k = 0): d[0][i][j] = w(i, j) if edge exists, 0 if i == j, and infinity otherwise.
- Recurrence Relation (for k = 1 to V):
  d[k][i][j] = min( d[k-1][i][j], d[k-1][i][k] + d[k-1][k][j] )

2. Complexity Analysis:
- Time Complexity: O(V^3) due to three nested loops over k, i, and j from 1 to V.
- Space Complexity: O(V^2) in-place distance matrix.
- Handles negative weight edges and detects negative-weight cycles if d[i][i] < 0 for any vertex i.`,
            tags: ['Algorithms', 'Dynamic Programming', 'Floyd-Warshall', 'Bangladesh Bank AP'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb-ap-6-7',
            questionNo: '6.7',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: `Given the table BankAccount(AccNo, CustID, Balance, OverdraftLimit, BranchID) where an account utilizes an overdraft when Balance < 0:
(a) Write an SQL query to find the second-highest positive Balance in the BankAccount table.
(b) Write an SQL query to list branches where total utilized overdraft exceeds BDT 5,00,000.`,
            solution: 'Query (a) uses a subquery with MAX(Balance) < (SELECT MAX(Balance) ...). Query (b) filters on Balance < 0, sums ABS(Balance), groups by BranchID, and filters with HAVING.',
            codeSolution: `-- (a) Find the Second-Highest Balance
SELECT MAX(Balance) AS Second_Highest_Balance
FROM BankAccount
WHERE Balance < (SELECT MAX(Balance) FROM BankAccount);

-- (b) Branches with Total Utilized Overdraft > 5,00,000
SELECT 
    BranchID,
    COUNT(AccNo) AS Overdraft_Account_Count,
    SUM(ABS(Balance)) AS Total_Overdraft_Utilized
FROM BankAccount
WHERE Balance < 0 AND ABS(Balance) <= OverdraftLimit
GROUP BY BranchID
HAVING SUM(ABS(Balance)) > 500000
ORDER BY Total_Overdraft_Utilized DESC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Second Highest Salary', 'Overdraft Query', 'Bangladesh Bank AP'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-bb-ap-6-8',
            questionNo: '6.8',
            type: 'descriptive',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'Explain High Availability (HA) cluster architecture in Core Banking data centers. Differentiate between Active-Active and Active-Passive clustering, and describe the "Split-Brain" problem and how Quorum/Fencing resolves it.',
            solution: `1. Active-Active vs Active-Passive Clustering:
- Active-Passive (Primary/Standby): Node A processes 100% of live traffic while Node B remains on hot standby receiving synchronous replication. If Heartbeat fails, the Virtual IP (VIP) fails over to Node B.
- Active-Active: Both nodes process live transactions simultaneously behind a load balancer, providing higher throughput and instant failover.

2. Split-Brain Problem & Quorum Resolution:
- Split-Brain occurs when the private heartbeat interconnect between nodes fails while both nodes remain alive; both nodes attempt to become Primary and write to shared storage concurrently, causing data corruption.
- Resolved via Odd-Numbered Quorum Consensus (e.g., 3 or 5 nodes requiring floor(N/2) + 1 votes) and STONITH (Shoot The Other Node In The Head) hardware power fencing.`,
            tags: ['System Design', 'High Availability', 'Split-Brain', 'Core Banking'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-bb-ap-6-9',
            questionNo: '6.9',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Contrast Stateful Packet Inspection (SPI) firewalls with Next-Generation Firewalls (NGFW). Why is an NGFW required at the perimeter of a financial data center?',
            solution: `- Stateful Packet Inspection (SPI): Operates at Layers 3 and 4, tracking TCP connection states (SYN, ESTABLISHED) and IP/Port tuples, but cannot inspect encrypted application payloads.
- Next-Generation Firewall (NGFW): Operates up to Layer 7 (Application Layer), integrating Deep Packet Inspection (DPI), Intrusion Prevention System (IPS), TLS/SSL decryption inspection, user identity awareness (Active Directory integration), and threat intelligence feeds to block application-level exploits and command-and-control (C2) traffic.`,
            tags: ['Network Security', 'SPI vs NGFW', 'Firewalls'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-bb-ap-6-10',
            questionNo: '6.10',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a program or draw a structured algorithm to find the Greatest Common Divisor (GCD) and Least Common Multiple (LCM) of two positive integers using Euclid\'s Algorithm. State its time complexity.',
            solution: 'Euclid\'s algorithm repeatedly applies gcd(a, b) = gcd(b, a mod b) until b == 0 in O(log(min(a, b))) logarithmic time. Then LCM(a, b) = (a / gcd(a, b)) * b (dividing first to prevent integer overflow).',
            codeSolution: `#include <stdio.h>

long long gcd(long long a, long long b) {
    while (b != 0) {
        long long temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

long long lcm(long long a, long long b) {
    if (a == 0 || b == 0) return 0;
    return (a / gcd(a, b)) * b;
}

int main() {
    long long x = 48, y = 18;
    printf("GCD = %lld, LCM = %lld\\n", gcd(x, y), lcm(x, y));
    return 0;
}`,
            solutionLanguage: 'c',
            tags: ['Algorithms', 'Euclid GCD', 'C Programming'],
            marks: 15,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 2. Combined Bank Assistant Programmer (BSCS / BIBM Official Format)
  {
    id: 'ap-combined-banks',
    title: 'Assistant Programmer, Combined Bank (BSCS / BIBM Official Paper)',
    searchQuery: 'Assistant Programmer Combined Bank Bankers Selection Committee question paper pdf',
    category: 'Bank Assistant Programmer',
    jobId: '10190',
    circularYear: '2023-2024',
    examDate: 'September 15, 2023',
    examBody: 'Banker\'s Selection Committee Secretariat (BSCS) / BIBM',
    participatingBanks: ['Sonali Bank PLC', 'Janata Bank PLC', 'Agrani Bank PLC', 'Rupali Bank PLC', 'BDBL', 'BKB'],
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Official BSCS / BIBM Format — 200 Marks)',
    summary: 'Official BSCS / BIBM Written Examination for Assistant Programmer across state-owned commercial banks. Structured into Part 1 (Questions 1–5: Focus Writing in Bangla & English, Translation, and Analytical Math — 50 Marks) and Part 2 (Question 6: 10 Subject Related CSE/IT Questions 6.1–6.10 covering C++ Virtual Functions, RESTful HTTP Idempotency, Bellman-Ford Algorithm, SQL DENSE_RANK Window Functions, B+ Tree vs Hash Index, Linux Crontab automation, and OAuth 2.0 / JWT — 150 Marks).',
    keyTopics: [
      'C++ Virtual Functions & Abstract Classes',
      'RESTful HTTP Methods & Idempotency',
      'Bellman-Ford Negative Cycle Detection',
      'SQL DENSE_RANK() Window Function',
      'B+ Tree vs Hash Index in Banking DBMS',
      'Linux Crontab 5-Field Scheduling',
      'JWT Structure (Header.Payload.Signature)',
      'Docker Containers vs Virtual Machines'
    ],
    sections: [
      {
        id: 'sec-cb-ap-general',
        name: 'Part 1: Focus Writing, Translation & Analytical Math (Questions 1–5) — 50 Marks',
        marks: 50,
        description: 'Official BSCS / BIBM Part 1: Bangla & English Focus Writing, Translation, and Analytical Math (50 Marks).',
        questions: [
          {
            id: 'q-cb-ap-1-5',
            questionNo: '1 – 5',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `1. Focus Writing in Bangla (10 Marks): রাষ্ট্রায়ত্ত বাণিজ্যিক ব্যাংকসমূহে কোর ব্যাংকিং সফটওয়্যার (CBS) আধুনিকায়ন ও সাইবার নিরাপত্তা।
2. Focus Writing in English (10 Marks): "Digital Literacy and Cybersecurity Awareness: The Twin Pillars of Financial Inclusivity in Bangladesh."
3. Translate into English (10 Marks): "রাষ্ট্রায়ত্ত বাণিজ্যিক ব্যাংকগুলো গ্রামীণ অর্থনীতির চালিকাশক্তি হিসেবে কাজ করছে। অনলাইন ব্যাংকিং এবং মোবাইল ফিনান্সিয়াল সার্ভিসের মাধ্যমে প্রান্তিক জনগোষ্ঠীর সঞ্চয়কে জাতীয় অর্থনীতিতে অন্তর্ভুক্ত করা সম্ভব হয়েছে।"
4. Translate into Bangla (10 Marks): "Microservices architecture enables banks to update individual payment modules without taking the entire core banking platform offline."
5. Analytical Math (10 Marks): A sum of money invested at compound interest amounts to Taka 4,624 in 2 years and to Taka 4,913 in 3 years. Find the rate of interest per annum and the principal sum.`,
            solution: `1 & 2. Focus Writing Key Summary:
- Modernizing legacy CBS platforms with API-driven architectures and real-time fraud monitoring enhances operational efficiency across thousands of rural and urban branches.
- Digital literacy campaigns protect rural MFS and agent banking users from social engineering and OTP phishing.

3. English Translation:
"State-owned commercial banks are functioning as the driving force of the rural economy. Through online banking and mobile financial services, it has become possible to integrate the savings of marginalized communities into the national economy."

4. Bangla Translation:
"মাইক্রোসার্ভিসেস আর্কিটেকচার সম্পূর্ণ কোর ব্যাংকিং প্ল্যাটফর্মকে অফলাইনে না নিয়েই ব্যাংকগুলোকে পৃথক পেমেন্ট মডিউল আপডেট করার সুযোগ দেয়।"

5. Analytical Math Solution:
- Amount in 2 years = Tk. 4,624; Amount in 3 years = Tk. 4,913.
- Interest for the 3rd year (on Tk. 4,624 for 1 year) = 4,913 - 4,624 = Tk. 289.
- Rate of interest r = (289 / 4,624) * 100% = (1 / 16) * 100% = 6.25% per annum.
- Principal P: P * (1 + 6.25/100)^2 = 4,624 => P * (17/16)^2 = 4,624 => P * (289/256) = 4,624 => P = 16 * 256 = Taka 4,096.`,
            tags: ['Focus Writing', 'Translation', 'Compound Interest Math'],
            marks: 50,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-cb-ap-tech',
        name: 'Part 2: 6. Subject Related Questions (6.1–6.10) — (10 x 15 = 150 Marks)',
        marks: 150,
        description: 'Official Part 2: 10 Subject Related CSE/IT Questions (150 Marks).',
        questions: [
          {
            id: 'q-cb-ap-6-1',
            questionNo: '6.1',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Demonstrate Runtime Polymorphism using pure virtual functions and abstract classes in C++ for a banking payment processor supporting CardPayment and MfsPayment. Explain why a base class destructor should be declared virtual.',
            solution: 'Declaring the base class destructor as virtual ensures that when a derived class object is deleted through a base class pointer (delete basePtr), the derived class destructor is invoked first before the base destructor, preventing memory and resource leaks.',
            codeSolution: `#include <iostream>
#include <string>

class PaymentProcessor {
public:
    virtual void processPayment(double amount) = 0; // Pure virtual function
    virtual ~PaymentProcessor() {} // Virtual destructor prevents memory leak
};

class CardPayment : public PaymentProcessor {
public:
    void processPayment(double amount) override {
        std::cout << "Card payment processed: BDT " << amount << std::endl;
    }
};

class MfsPayment : public PaymentProcessor {
public:
    void processPayment(double amount) override {
        std::cout << "MFS payment processed: BDT " << amount << std::endl;
    }
};`,
            solutionLanguage: 'cpp',
            tags: ['C++', 'Virtual Functions', 'Polymorphism', 'Virtual Destructor'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-cb-ap-6-2',
            questionNo: '6.2',
            type: 'descriptive',
            topicCategory: 'Software Engineering',
            questionText: 'Explain the RESTful architectural constraints. Compare HTTP methods GET, POST, PUT, PATCH, and DELETE in terms of Idempotency and Safety in banking API gateways.',
            solution: `1. HTTP Methods Safety & Idempotency Table:
- GET: Safe = Yes | Idempotent = Yes (Fetching account balance/statement).
- POST: Safe = No | Idempotent = No (Initiating a fund transfer; requires an Idempotency-Key header in banking APIs to prevent duplicate debits on network retry).
- PUT: Safe = No | Idempotent = Yes (Replacing an entire customer KYC resource).
- PATCH: Safe = No | Idempotent = No (Partial update of customer contact details).
- DELETE: Safe = No | Idempotent = Yes (Deleting a beneficiary record).`,
            tags: ['REST API', 'HTTP Methods', 'Idempotency', 'Banking API'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-cb-ap-6-3',
            questionNo: '6.3',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a Python or C++ function to implement the Bellman-Ford Shortest Path algorithm on a directed weighted graph and show how it detects negative-weight cycles.',
            solution: 'Relax all E edges (V - 1) times. Then perform one additional V-th pass over all edges: if any edge (u, v) can still be relaxed (dist[u] + w < dist[v]), a negative-weight cycle is reachable from the source.',
            codeSolution: `def bellman_ford(num_vertices: int, edges: list, source: int):
    dist = [float('inf')] * num_vertices
    dist[source] = 0

    for _ in range(num_vertices - 1):
        for u, v, w in edges:
            if dist[u] != float('inf') and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w

    for u, v, w in edges:
        if dist[u] != float('inf') and dist[u] + w < dist[v]:
            raise ValueError("Negative-weight cycle detected!")

    return dist`,
            solutionLanguage: 'python',
            tags: ['Algorithms', 'Bellman-Ford', 'Shortest Path'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-cb-ap-6-4',
            questionNo: '6.4',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Given tables Branch(BranchID, BranchName, Zone) and Account(AccNo, BranchID, Balance), write an SQL query using Window Functions (DENSE_RANK) to find the Top 3 branches in each Zone having the highest total deposit balance.',
            solution: 'Aggregate SUM(a.Balance) per branch first, then apply DENSE_RANK() OVER (PARTITION BY b.Zone ORDER BY SUM(a.Balance) DESC) inside a CTE.',
            codeSolution: `WITH RankedBranches AS (
    SELECT 
        b.Zone,
        b.BranchID,
        b.BranchName,
        SUM(a.Balance) AS Total_Deposit,
        DENSE_RANK() OVER (
            PARTITION BY b.Zone 
            ORDER BY SUM(a.Balance) DESC
        ) AS rnk
    FROM Branch b
    JOIN Account a ON b.BranchID = a.BranchID
    GROUP BY b.Zone, b.BranchID, b.BranchName
)
SELECT Zone, BranchID, BranchName, Total_Deposit
FROM RankedBranches
WHERE rnk <= 3
ORDER BY Zone, rnk;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'Window Functions', 'DENSE_RANK'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-cb-ap-6-5',
            questionNo: '6.5',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Compare B+ Tree Index and Hash Index in Relational Databases in terms of equality search, range queries (BETWEEN, >, <), sorting, and disk I/O efficiency.',
            solution: `- Equality Search (=): Hash Index takes O(1) average time via bucket lookup; B+ Tree takes O(log_B N) logarithmic time.
- Range Queries (BETWEEN, >, <) & ORDER BY: Hash Index CANNOT support range scans or ordered retrieval because hashing destroys key ordering. B+ Tree excels at range queries in O(log_B N + K) because all leaf nodes are linked in sorted order.
- Hence, B+ Tree is the default index structure for banking transaction tables.`,
            tags: ['DBMS', 'B+ Tree vs Hash Index', 'Database Indexing'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-cb-ap-6-6',
            questionNo: '6.6',
            type: 'descriptive',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'Explain the 5-field syntax of the Linux Cron daemon (crontab). Write crontab entries to: (i) Run an EOD backup script every day at 11:45 PM, and (ii) Run a transaction reconciliation script every 15 minutes during banking hours (9 AM to 5 PM, Sunday through Thursday).',
            solution: `1. 5-Field Crontab Syntax:
Minute (0-59) | Hour (0-23) | Day-of-Month (1-31) | Month (1-12) | Day-of-Week (0-6, where 0=Sunday)

2. Crontab Expressions:
(i) Every day at 11:45 PM (23:45):
45 23 * * * /opt/bank/scripts/eod_backup.sh

(ii) Every 15 minutes from 9 AM to 5 PM, Sunday to Thursday (0-4):
*/15 9-17 * * 0-4 /opt/bank/scripts/reconcile_txns.sh`,
            tags: ['Linux', 'Crontab', 'System Administration'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-cb-ap-6-7',
            questionNo: '6.7',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the structure of a JSON Web Token (JWT) used in stateless API authentication. Why must the server verify the cryptographic signature before trusting claims in the JWT payload?',
            solution: `1. Three Parts of a JWT (Header.Payload.Signature):
- Header: Base64Url-encoded JSON specifying token type ("JWT") and signing algorithm (e.g., HS256 or RS256).
- Payload (Claims): Base64Url-encoded JSON containing user claims (sub, role, iat, exp).
- Signature: Computed as HMAC-SHA256(base64Url(Header) + "." + base64Url(Payload), secretKey) or RSA private-key signature.

2. Why Signature Verification is Mandatory:
The Header and Payload are merely Base64Url-encoded (NOT encrypted) and can be decoded and modified by anyone. Verifying the cryptographic signature ensures integrity and authenticity—if an attacker alters 'role: "user"' to 'role: "admin"' or sets 'alg: "none"', signature validation immediately rejects the tampered token.`,
            tags: ['Security', 'JWT', 'API Authentication'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-cb-ap-6-8',
            questionNo: '6.8',
            type: 'descriptive',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'Compare Docker Containers with Virtual Machines (VMs) in terms of OS kernel sharing, boot time, memory footprint, and isolation boundaries.',
            solution: `- OS Kernel Sharing: Containers share the Host OS Linux kernel using namespaces (PID, NET, MNT) and cgroups; each VM runs a full separate Guest OS kernel on top of a Hypervisor.
- Footprint & Boot Time: Containers are megabytes in size and start in milliseconds; VMs are gigabytes in size and take seconds/minutes to boot.
- Isolation: VMs provide stronger hardware-level virtualization isolation; containers provide process-level OS isolation.`,
            tags: ['DevOps', 'Docker vs VM', 'Containerization'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-cb-ap-6-9',
            questionNo: '6.9',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C/C++ function to reverse a Singly Linked List iteratively in O(N) time and O(1) auxiliary space.',
            solution: 'Maintain three pointers: prev (initialized to NULL), curr (initialized to head), and nextTemp. Iterate through the list flipping curr->next = prev.',
            codeSolution: `struct Node {
    int data;
    struct Node* next;
};

struct Node* reverseList(struct Node* head) {
    struct Node* prev = NULL;
    struct Node* curr = head;
    struct Node* nextTemp = NULL;

    while (curr != NULL) {
        nextTemp = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev; // New head
}`,
            solutionLanguage: 'c',
            tags: ['Data Structures', 'Linked List Reversal', 'C Programming'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-cb-ap-6-10',
            questionNo: '6.10',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: 'Perform RSA key generation and encryption for prime numbers p = 3, q = 11, public exponent e = 7, and plaintext message M = 5. Calculate: (i) n and Euler totient phi(n), (ii) Private key d, and (iii) Ciphertext C.',
            solution: `Step-by-Step RSA Calculation:
1. Given p = 3, q = 11, e = 7, M = 5:
   - Modulus n = p * q = 3 * 11 = 33.
   - Euler's Totient phi(n) = (p - 1)(q - 1) = 2 * 10 = 20.

2. Compute Private Key d such that (d * e) mod phi(n) = 1:
   - (7 * d) mod 20 = 1
   - Testing d = 3: 7 * 3 = 21, and 21 mod 20 = 1.
   - Therefore, Private Key d = 3.

3. Encryption of Plaintext M = 5:
   - C = M^e mod n = 5^7 mod 33
   - 5^2 = 25 = -8 (mod 33)
   - 5^4 = (-8)^2 = 64 = 31 = -2 (mod 33)
   - 5^7 = 5^4 * 5^2 * 5^1 = (-2) * (-8) * 5 = 16 * 5 = 80 mod 33
   - Since 80 = 2 * 33 + 14, Ciphertext C = 14.`,
            tags: ['Cryptography', 'RSA Math', 'Network Security'],
            marks: 15,
            difficulty: 'Medium'
          }
        ]
      }
    ]
  },

  // 3. BPSC Assistant Programmer (Different Ministries & Departments — Official Format)
  {
    id: 'ap-bpsc-ministries',
    title: 'Assistant Programmer, BPSC (Different Ministries & Departments — Non-Cadre Grade 9)',
    searchQuery: 'BPSC Assistant Programmer Different Ministries Non-Cadre written question solution pdf',
    category: 'Ministry Assistant Programmer',
    jobId: 'BPSC-AP-2024',
    circularYear: '2022-2024',
    examDate: 'May 20, 2024',
    examBody: 'BPSC (Bangladesh Public Service Commission)',
    participatingBanks: ['Ministry of Public Administration (MoPA)', 'Cabinet Division', 'Ministry of Land', 'BBS', 'DSHE'],
    ministryOrDepartment: 'Different Ministries & Departments (BPSC Non-Cadre Grade 9)',
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '3 Hours (BPSC Non-Cadre Standard)',
    examType: 'Written Exam (Official BPSC Non-Cadre Format — 200 Marks)',
    summary: 'Official BPSC Non-Cadre Grade-9 Written Examination Paper for Assistant Programmer across Ministries and Directorates. Covers Part 1 (Bangla, English, Bangladesh & International Affairs, and Mental Ability / Math — 100 Marks) and Part 2 ( Departmental CSE/IT Technical Questions 6.1–6.10: Agile vs Waterfall for e-Nothi, Linux Server Administration & chmod, PKI Digital Signatures under CCA, SQL Land Mutation Aggregation, Cyber Security Act CII provisions, C/C++ Pointer & Recursion, and Subnetting — 100 Marks).',
    keyTopics: [
      'SDLC Agile vs Waterfall for e-Governance',
      'Linux chmod 755/644 & find Log Cleanup',
      'PKI Digital Signatures & CCA Root CA',
      'SQL Land Mutation District Aggregation',
      'Critical Information Infrastructure (CII)',
      'BanglaGovNet & Info-Sarker DWDM Backbone',
      '3NF vs BCNF Database Normalization',
      'BST Traversal & Binary Search'
    ],
    sections: [
      {
        id: 'sec-bpsc-ap-general',
        name: 'Part 1: Bangla, English, General Knowledge & Analytical Math (Questions 1–5)',
        marks: 50,
        description: 'Official BPSC Non-Cadre General Section: Bangla, English, Translation, General Knowledge, and Mathematical Reasoning.',
        questions: [
          {
            id: 'q-bpsc-ap-1-5',
            questionNo: '1 – 5',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `1. বাংলা রচনা / ফোকাস রাইটিং (10 Marks): "স্মার্ট গভর্নেন্স ও নাগরিক সেবা সহজীকরণে ই-নথি (e-Nothi) এবং ই-জিপি (e-GP)-এর ভূমিকা।"
2. English Essay / Focus Writing (10 Marks): "Building Resilient Critical Information Infrastructure (CII) for Public Service Delivery in Bangladesh."
3. Translate into English (10 Marks): "সরকারি দপ্তরের কার্যক্রমে তথ্যপ্রযুক্তির প্রয়োগে স্বচ্ছতা ও গতিশীলতা বৃদ্ধি পেয়েছে। ই-জিপি ব্যবস্থার মাধ্যমে সরকারি ক্রয় প্রক্রিয়ায় অনিয়ম রোধ করা সম্ভব হয়েছে।"
4. Translate into Bangla (10 Marks): "Digital signatures backed by Public Key Infrastructure ensure the authenticity and non-repudiation of official electronic documents."
5. General Knowledge & Analytical Math (10 Marks):
5.1 Which article of the Constitution of Bangladesh guarantees equality of opportunity in public employment?
5.2 What is the full form of CERT in BGD e-GOV CIRT?
5.3 If the price of a server increases by 25%, by what percentage must a ministry reduce its hardware unit purchase so that the total budget expenditure remains unchanged?`,
            solution: `1 & 2. Focus Writing Key Points:
- e-Nothi eliminates bureaucratic file delays and creates an immutable PKI-signed audit trail across ministry hierarchy.
- e-GP (Electronic Government Procurement) ensures transparent tendering under CPTU/BPPA.

3. English Translation:
"The application of information technology in government departmental operations has increased transparency and dynamism. Through the e-GP system, it has become possible to prevent irregularities in the public procurement process."

4. Bangla Translation:
"পাবলিক কি ইনফ্রাস্ট্রাকচার (PKI) দ্বারা সমর্থিত ডিজিটাল স্বাক্ষর দাফতরিক ইলেকট্রনিক নথিপত্রের প্রামাণিকতা এবং অনস্বীকার্যতা (Non-repudiation) নিশ্চিত করে।"

5. Answers to 5.1 – 5.3:
- 5.1: Article 29 of the Constitution of the People's Republic of Bangladesh.
- 5.2: Computer Incident Response Team (or Computer Emergency Readiness Team).
- 5.3: Percentage reduction = [R / (100 + R)] * 100% = [25 / 125] * 100% = 20%.`,
            tags: ['BPSC Non-Cadre', 'e-Governance', 'Translation', 'Math'],
            marks: 50,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-bpsc-ap-tech',
        name: 'Part 2: 6. Subject Related CSE/IT Questions (6.1–6.10) — 150 Marks',
        marks: 150,
        description: 'Official BPSC Departmental CSE/IT Questions for Assistant Programmer (Grade-9).',
        questions: [
          {
            id: 'q-bpsc-ap-6-1',
            questionNo: '6.1',
            type: 'descriptive',
            topicCategory: 'Software Engineering',
            questionText: 'Compare the Waterfall Model and Agile Scrum Framework for developing e-Governance software in government ministries. Describe the core actors and workflow in the national e-Nothi system.',
            solution: `1. Waterfall vs Agile Scrum in Government IT:
- Waterfall is suited for fixed-scope hardware/network procurement contracts where requirements are frozen in the tender RFP.
- Agile Scrum delivers citizen-facing portals (MyGov, e-Mutation) in 2–4 week iterative Sprints, adapting rapidly to policy circulars.

2. National e-Nothi Actors & Workflow:
- Actors: Citizen, Dealing Assistant, Section Officer, Deputy Secretary, Joint Secretary, Secretary.
- Workflow: Dak Receipt -> Digital Nothi Creation & Note Drafting -> Multi-tier Hierarchical Review -> PKI Digital Signature Approval -> Automated SMS/Portal Citizen Dispatch.`,
            tags: ['Software Engineering', 'Agile vs Waterfall', 'e-Nothi', 'BPSC'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-bpsc-ap-6-2',
            questionNo: '6.2',
            type: 'coding',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'Explain Linux File Permissions 755 and 644. Write Linux shell commands to: (a) Recursively change ownership of /var/www/govapp to user nginx and group nginx, and (b) Find all .log files in /var/log larger than 50MB and older than 30 days and delete them.',
            solution: `- 755 (rwxr-xr-x): Owner has Read/Write/Execute (7); Group and Others have Read/Execute (5). Used for directories and executable scripts.
- 644 (rw-r--r--): Owner has Read/Write (6); Group and Others have Read-only (4). Used for static configuration/web files.`,
            codeSolution: `# (a) Change ownership and directory permissions recursively
sudo chown -R nginx:nginx /var/www/govapp
sudo chmod -R 755 /var/www/govapp

# (b) Find and delete .log files > 50MB and older than 30 days
find /var/log -type f -name "*.log" -size +50M -mtime +30 -exec rm -f {} \\;`,
            solutionLanguage: 'bash',
            tags: ['Linux', 'Bash', 'chmod', 'BPSC'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-bpsc-ap-6-3',
            questionNo: '6.3',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'What are Digital Signatures and Public Key Infrastructure (PKI)? Explain how Certifying Authorities (CA) under the Controller of Certifying Authorities (CCA) Bangladesh validate digital signatures for e-GP and official gazettes.',
            solution: `1. Digital Signature Mechanism:
- Signer computes SHA-256 hash digest of the document: H = SHA256(M).
- Signer encrypts H using their Private Key stored on a FIPS 140-2 hardware USB token: Sig = Encrypt(H, PrivKey).
- Verifier decrypts Sig using the signer's Public Key (from their X.509 Digital Certificate issued by a CCA-licensed CA) and verifies that Decrypt(Sig, PubKey) == SHA256(M).
- Guarantees Authenticity, Data Integrity, and Legal Non-Repudiation under the ICT Act 2006.`,
            tags: ['PKI', 'Digital Signature', 'CCA', 'e-GP', 'BPSC'],
            marks: 15,
            difficulty: 'Medium'
          },
          {
            id: 'q-bpsc-ap-6-4',
            questionNo: '6.4',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Given tables for e-Mutation: Application(AppID, CitizenNID, MouzaID, KhatianNo, SubmissionDate, Status) and Citizen(CitizenNID, Name, MobileNo, District). Write an SQL query to retrieve the District name, total number of pending applications (Status = \'PENDING\'), and count of unique citizens waiting for mutation, ordered by pending count descending.',
            solution: 'Join Application and Citizen on CitizenNID, filter by Status = \'PENDING\', group by District, and use COUNT(AppID) and COUNT(DISTINCT CitizenNID).',
            codeSolution: `SELECT 
    c.District,
    COUNT(a.AppID) AS Total_Pending_Applications,
    COUNT(DISTINCT a.CitizenNID) AS Unique_Citizens_Waiting
FROM Application a
JOIN Citizen c ON a.CitizenNID = c.CitizenNID
WHERE a.Status = 'PENDING'
GROUP BY c.District
ORDER BY Total_Pending_Applications DESC;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'GROUP BY', 'COUNT DISTINCT', 'BPSC'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-bpsc-ap-6-5',
            questionNo: '6.5',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the architecture of BanglaGovNet and Info-Sarker (Phases I, II, III). How do DWDM optical fiber backbones and IP-VPN interconnect Ministries, 64 Districts, 492 Upazilas, and Union Digital Centers (UDCs)?',
            solution: `- BanglaGovNet & Info-Sarker establish a dedicated nationwide government intranet over Dense Wavelength Division Multiplexing (DWDM) fiber-optic links and MPLS IP-VPN tunnels.
- Interconnects all Ministry Secretariats, 64 Deputy Commissioner (DC) offices, 492 Upazila Nirbahi Officer (UNO) offices, and 4,500+ Union Digital Centers (UDCs) directly to the Tier-IV National Data Center in Kaliakoir.`,
            tags: ['e-Governance', 'Info-Sarker', 'DWDM', 'BPSC'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-bpsc-ap-6-6',
            questionNo: '6.6',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a C/C++ program to implement Binary Search on a sorted array of integers. Trace the steps to search for key = 35 in the array [10, 20, 30, 35, 40, 50, 60] and derive its O(log N) time complexity.',
            solution: 'Recurrence T(N) = T(N/2) + O(1) yields T(N) = O(log2 N) by Master Theorem.',
            codeSolution: `#include <stdio.h>

int binarySearch(int arr[], int n, int key) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == key) return mid;
        else if (arr[mid] < key) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`,
            solutionLanguage: 'c',
            tags: ['Algorithms', 'Binary Search', 'C Programming', 'BPSC'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-bpsc-ap-6-7',
            questionNo: '6.7',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'What are Update, Insert, and Delete Anomalies in an unnormalized database table? Explain how decomposing a relation into Third Normal Form (3NF) eliminates these anomalies.',
            solution: `- Insertion Anomaly: Cannot insert a new department until at least one employee is assigned to it.
- Deletion Anomaly: Deleting the last employee in a department inadvertently deletes the department record itself.
- Update Anomaly: Updating a department's location requires updating multiple rows, risking inconsistent data.
- Decomposing into 3NF (removing partial and transitive dependencies so every non-key attribute depends solely on the primary key) places Employee and Department in separate relations linked by DeptID, completely eliminating all three anomalies.`,
            tags: ['DBMS', 'Anomalies', '3NF Normalization', 'BPSC'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-bpsc-ap-6-8',
            questionNo: '6.8',
            type: 'math',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'Perform the following number base conversions showing all steps: (a) (45.625)_10 to Binary, (b) (1011011101)_2 to Hexadecimal and Octal, and (c) (2F9A)_16 to Binary.',
            solution: `(a) (45.625)_10 to Binary:
- Integer part 45 = 32 + 8 + 4 + 1 = (101101)_2
- Fractional part 0.625:
  0.625 * 2 = 1.25 (1)
  0.25 * 2 = 0.50 (0)
  0.50 * 2 = 1.00 (1) -> (.101)_2
- Result: (101101.101)_2

(b) (1011011101)_2 to Hexadecimal and Octal:
- Group in 4 bits from right for Hex: 0010 1101 1101 -> (2DD)_16
- Group in 3 bits from right for Octal: 001 011 011 101 -> (1335)_8

(c) (2F9A)_16 to Binary:
- 2 = 0010, F = 1111, 9 = 1001, A = 1010 -> (0010111110011010)_2`,
            tags: ['Digital Logic', 'Number Base Conversion', 'BPSC'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-bpsc-ap-6-9',
            questionNo: '6.9',
            type: 'descriptive',
            topicCategory: 'Hardware, OS & Architecture',
            questionText: 'What is a Semaphore in an Operating System? Differentiate between a Binary Semaphore (Mutex) and a Counting Semaphore in solving the Producer-Consumer (Bounded Buffer) synchronization problem.',
            solution: `- A Semaphore is an integer synchronization variable accessed only through two atomic kernel operations: wait(S) [or P(S)] and signal(S) [or V(S)].
- Binary Semaphore / Mutex: Value ranges between 0 and 1; enforces mutual exclusion when accessing the critical section buffer.
- Counting Semaphore: Value ranges over an unrestricted domain; in the Bounded Buffer problem, 'empty = N' tracks available empty slots and 'full = 0' tracks filled items.`,
            tags: ['Operating Systems', 'Semaphores', 'Producer-Consumer', 'BPSC'],
            marks: 15,
            difficulty: 'Easy'
          },
          {
            id: 'q-bpsc-ap-6-10',
            questionNo: '6.10',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Differentiate between a Hub, a Layer-2 Switch, and a Layer-3 Router in terms of Broadcast Domains and Collision Domains.',
            solution: `- Hub (Layer 1): Single collision domain and single broadcast domain across all ports.
- Layer-2 Switch (Data Link Layer): Each port is its own separate collision domain (full-duplex eliminates collisions), while all ports in the same VLAN belong to a single broadcast domain.
- Layer-3 Router (Network Layer): Separates both collision domains and broadcast domains on every interface; routes packets based on IP destination prefixes.`,
            tags: ['Networking', 'Hub vs Switch vs Router', 'Collision vs Broadcast Domain', 'BPSC'],
            marks: 15,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 4. ICT Division / DoICT Assistant Programmer
  {
    id: 'ap-ict-division',
    title: 'Assistant Programmer, ICT Division (Department of ICT — DoICT)',
    searchQuery: 'ICT Division Assistant Programmer Department of ICT written question solution pdf',
    category: 'Ministry Assistant Programmer',
    jobId: 'DoICT-AP-2024',
    circularYear: '2023-2024',
    examDate: 'August 12, 2024',
    examBody: 'BPSC / ICT Division',
    participatingBanks: ['Department of Information and Communication Technology (DoICT)', 'ICT Division'],
    ministryOrDepartment: 'Ministry of Posts, Telecommunications and Information Technology',
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Official BPSC / DoICT Format — 200 Marks)',
    summary: 'Official Written Examination for Assistant Programmer under the Department of ICT (DoICT). Covers Part 1 (Bangla & English Focus Writing, Translation, and Analytical Math — 50 Marks) and Part 2 (Subject Related CSE/IT Questions 6.1–6.10: PostgreSQL Stored Procedures, Tier-IV National Data Center 99.995% Uptime Math, MVC Request Lifecycle, OWASP Top 10 SQLi & XSS, Python REST API Consumer, and CI/CD DevOps Pipelines — 150 Marks).',
    keyTopics: [
      'PostgreSQL Transactional Stored Procedures',
      'Tier-IV Data Center 99.995% Uptime Calculation',
      'Model-View-Controller (MVC) Pattern',
      'OWASP Top 10 (SQLi & XSS Remediation)',
      'Python REST API JSON Client',
      'CI/CD Automated DevOps Pipeline'
    ],
    sections: [
      {
        id: 'sec-doict-nontech',
        name: 'Part 1: Focus Writing, Translation & Analytical Math (Questions 1–5) — 50 Marks',
        marks: 50,
        description: 'Official Part 1: Bangla & English Focus Writing, Translation, and Analytical Math (50 Marks).',
        questions: [
          {
            id: 'q-doict-7',
            questionNo: '1 & 2',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `1. Focus Writing in Bangla (10 Marks): বাংলাদেশে সফটওয়্যার শিল্পের বিকাশ ও বৈদেশিক মুদ্রা অর্জনে হাই-টেক পার্কের ভূমিকা।
2. Focus Writing in English (10 Marks): "The Four Pillars of Smart Bangladesh: Smart Citizen, Smart Government, Smart Society, and Smart Economy."`,
            solution: `1. Bangla Focus Writing Summary:
- কালিয়াকৈর, যশোর, সিলেট ও রাজশাহীতে স্থাপিত হাই-টেক পার্ক এবং শেখ কামাল আইটি ট্রেনিং অ্যান্ড ইনকিউবেশন সেন্টারগুলো দেশীয় স্টার্টআপ ও সফটওয়্যার রপ্তানিতে নতুন গতি সঞ্চার করেছে।

2. English Focus Writing Summary:
- Smart Citizen (universal digital literacy), Smart Government (100% paperless, AI-assisted public service delivery), Smart Society (inclusive digital healthcare and education), and Smart Economy (cashless FinTech and knowledge-driven ICT exports).`,
            tags: ['Focus Writing', 'Hi-Tech Park', 'DoICT'],
            marks: 20,
            difficulty: 'Easy'
          },
          {
            id: 'q-doict-8',
            questionNo: '3, 4 & 5',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `3. Translate into English (10 Marks): "আইসিটি বিভাগ দেশের তরুণ প্রজন্মকে দক্ষ মানবসম্পদে রূপান্তরের জন্য বিভিন্ন প্রশিক্ষণ কর্মসূচি পরিচালনা করছে। ফ্রিল্যান্সিং ও সফটওয়্যার রফতানি দেশের বৈদেশিক মুদ্রা অর্জনে নতুন দিগন্ত উন্মোচন করেছে।"
4. Translate into Bangla (10 Marks): "National Data Center ensures secure hosting of critical government applications while eliminating dependency on foreign cloud servers."
5. Analytical Math (10 Marks): An IT training batch has 60 trainees. The ratio of backend developers to frontend developers is 7:5. How many more frontend developers must join the batch so that the ratio becomes 7:6?`,
            solution: `3. English Translation:
"The ICT Division is conducting various training programs to transform the country's young generation into skilled human resources. Freelancing and software exports have opened a new horizon in earning foreign exchange for the country."

4. Bangla Translation:
"ন্যাশনাল ডেটা সেন্টার বিদেশি ক্লাউড সার্ভারের ওপর নির্ভরশীলতা দূর করার পাশাপাশি গুরুত্বপূর্ণ সরকারি অ্যাপ্লিকেশনগুলোর নিরাপদ হোস্টিং নিশ্চিত করে।"

5. Analytical Math Solution:
- Total trainees = 60, Ratio = 7 : 5 (Sum of ratio parts = 12).
- Backend developers = (7 / 12) * 60 = 35.
- Frontend developers = (5 / 12) * 60 = 25.
- Let x frontend developers join so that 35 / (25 + x) = 7 / 6
  => 25 + x = 30 => x = 5 frontend developers.`,
            tags: ['Translation', 'Ratio Math', 'DoICT'],
            marks: 30,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-doict-tech',
        name: 'Part 2: 6. Subject Related Questions (6.1–6.6) — 150 Marks',
        marks: 150,
        description: 'Official Part 2: Subject Related CSE/IT Questions for DoICT Assistant Programmer.',
        questions: [
          {
            id: 'q-doict-1',
            questionNo: '6.1',
            type: 'coding',
            topicCategory: 'Database & SQL',
            questionText: 'Write a Stored Procedure in PostgreSQL that receives CitizenNID, ServiceID, and FeeAmount. It verifies if the citizen exists, logs a payment record, updates the service application status to \'PAID\', and handles exceptions with transaction rollback.',
            solution: 'Uses PL/pgSQL transaction control with EXCEPTION WHEN OTHERS THEN ROLLBACK.',
            codeSolution: `CREATE OR REPLACE PROCEDURE process_citizen_payment(
    p_citizen_nid VARCHAR(20),
    p_service_id INT,
    p_fee_amount DECIMAL(10,2)
)
LANGUAGE plpgsql
AS $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM Citizens WHERE nid = p_citizen_nid) THEN
        RAISE EXCEPTION 'Citizen NID % not found.', p_citizen_nid;
    END IF;

    INSERT INTO PaymentLogs (citizen_nid, service_id, amount, payment_time, status)
    VALUES (p_citizen_nid, p_service_id, p_fee_amount, NOW(), 'SUCCESS');

    UPDATE ServiceApplications
    SET payment_status = 'PAID', updated_at = NOW()
    WHERE service_id = p_service_id AND citizen_nid = p_citizen_nid;

    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE;
END;
$$;`,
            solutionLanguage: 'sql',
            tags: ['PostgreSQL', 'Stored Procedure', 'DoICT'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-doict-2',
            questionNo: '6.2',
            type: 'math',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the Tier-IV fault-tolerant architecture of the National Data Center in Kaliakoir, Gazipur. Calculate the maximum allowable annual downtime in minutes for a Tier-IV data center guaranteeing 99.995% availability.',
            solution: `1. Tier-IV Architecture:
- Features 2N+1 full redundancy across dual independent utility power feeds, UPS banks, diesel generators, cooling chillers, and core fiber uplinks. Survives any single unplanned equipment failure or maintenance event with zero downtime.

2. 99.995% Uptime Calculation:
- Total minutes in a year (365 days) = 365 * 24 * 60 = 525,600 minutes.
- Maximum allowable downtime percentage = 100% - 99.995% = 0.005% = 0.00005.
- Allowable annual downtime = 525,600 * 0.00005 = 26.28 minutes per year.`,
            tags: ['Tier-IV Data Center', 'High Availability Math', 'DoICT'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-doict-3',
            questionNo: '6.3',
            type: 'descriptive',
            topicCategory: 'Software Engineering',
            questionText: 'Explain the Model-View-Controller (MVC) architectural pattern and trace the request-response lifecycle when a citizen checks their application status on a government web portal.',
            solution: `- Model: Encapsulates database schema, ORM entities, and business validation rules.
- View: Renders the presentation layer (HTML/Blade/React UI).
- Controller: Receives the HTTP request from the router, invokes the Model to fetch application status by tracking ID, and returns the rendered View or JSON payload.`,
            tags: ['Software Engineering', 'MVC Pattern', 'DoICT'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-doict-4',
            questionNo: '6.4',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Discuss Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) from the OWASP Top 10. How are they prevented in modern web applications?',
            solution: `- XSS (Cross-Site Scripting): Attacker injects malicious JavaScript into pages viewed by other users. Prevented via context-aware output encoding, Content-Security-Policy (CSP) headers, and HttpOnly session cookies.
- CSRF (Cross-Site Request Forgery): Tricks an authenticated user's browser into submitting an unauthorized state-changing request. Prevented via anti-CSRF synchronizer tokens and SameSite=Strict/Lax cookie attributes.`,
            tags: ['Web Security', 'OWASP Top 10', 'XSS', 'CSRF'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-doict-5',
            questionNo: '6.5',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a Python script using the requests library to fetch JSON data from a government REST API endpoint, filter services under the "Education" category, and print their names and fees.',
            solution: 'Uses requests.get() with timeout, status code verification, and JSON dictionary parsing.',
            codeSolution: `import requests

def fetch_education_services(api_url: str):
    response = requests.get(api_url, timeout=10)
    response.raise_for_status()
    services = response.json().get("services", [])
    for svc in services:
        if svc.get("category") == "Education":
            print(f"{svc.get('name')} - Fee: BDT {svc.get('fee_bdt', 0)}")`,
            solutionLanguage: 'python',
            tags: ['Python', 'REST API', 'JSON'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-doict-6',
            questionNo: '6.6',
            type: 'descriptive',
            topicCategory: 'Software Engineering',
            questionText: 'What is CI/CD (Continuous Integration and Continuous Deployment)? Describe the stages of an automated DevSecOps pipeline.',
            solution: `Stages of an Automated DevSecOps Pipeline:
1. Source Control Trigger (Git push / Pull Request).
2. Automated Build & Dependency Resolution.
3. Automated Unit & Integration Testing.
4. SAST (Static Application Security Testing) & Container Image Vulnerability Scanning.
5. Zero-Downtime Rolling Deployment to Staging/Production Kubernetes cluster.`,
            tags: ['DevOps', 'CI/CD', 'Software Engineering'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  },

  // 5. Bangladesh Election Commission Assistant Programmer
  {
    id: 'ap-election-commission',
    title: 'Assistant Programmer, Bangladesh Election Commission Secretariat',
    searchQuery: 'Election Commission Bangladesh Assistant Programmer written question solution pdf',
    category: 'Ministry Assistant Programmer',
    jobId: 'EC-AP-2023',
    circularYear: '2022-2023',
    examDate: 'December 02, 2023',
    examBody: 'BPSC / BUET',
    participatingBanks: ['Bangladesh Election Commission Secretariat (NID Wing)'],
    ministryOrDepartment: 'Bangladesh Election Commission Secretariat',
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Official BPSC / BUET Format — 200 Marks)',
    summary: 'Official Written Examination for Assistant Programmer at the Bangladesh Election Commission. Covers Part 1 (Focus Writing, Translation & Math — 50 Marks) and Part 2 (Subject Related CSE/IT Questions 6.1–6.6: Composite Database Partitioning for 120M Voter Records, AFIS 1:N Biometric Minutiae Deduplication, SQL Polling Center Capacity Queries, EVM Air-Gapped OTP Firmware Security, and Python 10/17-digit Smart NID Validator — 150 Marks).',
    keyTopics: [
      'Database Partitioning for 120M NID Records',
      'AFIS Biometric Minutiae Deduplication',
      'SQL HAVING Polling Center Capacity Query',
      'EVM Air-Gapped OTP Microcontroller Security',
      '10-Digit & 17-Digit Smart NID Validation',
      'Bank & Telecom e-KYC NID Verification API'
    ],
    sections: [
      {
        id: 'sec-ec-nontech',
        name: 'Part 1: Focus Writing, Translation & Analytical Math (Questions 1–5) — 50 Marks',
        marks: 50,
        description: 'Official Part 1: Focus Writing in Bangla & English, Translation, and Analytical Math (50 Marks).',
        questions: [
          {
            id: 'q-ec-7',
            questionNo: '1 – 5',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `1. Focus Writing in Bangla (10 Marks): জাতীয় পরিচয়পত্র (Smart NID) ও বায়োমেট্রিক ডেটাবেস: নাগরিক সেবা ও সুশাসনের ভিত্তি।
2. Focus Writing in English (10 Marks): "The Role of Biometric National Identity (NID) in Strengthening Governance and Preventing Identity Fraud in Bangladesh."
3. Translate into English (10 Marks): "নির্বাচন কমিশনের জাতীয় ভোটার ডাটাবেজ দেশের অন্যতম গুরুত্বপূর্ণ তথ্য পরিকাঠামো। এই ডাটাবেজের গোপনীয়তা ও সার্বিক নিরাপত্তা বজায় রাখা জাতীয় সুরক্ষার অবিচ্ছেদ্য অংশ।"
4. Translate into Bangla (10 Marks): "Biometric deduplication ensures that every citizen is registered only once in the national electoral roll."
5. Analytical Math (10 Marks): In a polling center, 80% of registered voters cast their votes. Out of the votes cast, 5% were declared invalid. If the winning candidate received 60% of the valid votes and won by a margin of 1,520 votes over the only rival candidate, find the total number of registered voters in that center.`,
            solution: `1–4. Translation Solutions:
- English Translation (Q3): "The national voter database of the Election Commission is one of the most vital information infrastructures of the country. Maintaining the confidentiality and overall security of this database is an integral part of national security."
- Bangla Translation (Q4): "বায়োমেট্রিক ডিডুপ্লিকেশন নিশ্চিত করে যে প্রতিটি নাগরিক জাতীয় ভোটার তালিকায় কেবল একবারই নিবন্ধিত হয়েছেন।"

5. Analytical Math Solution:
- Let total registered voters = N.
- Votes cast = 0.80 * N.
- Valid votes = 95% of 0.80 * N = 0.95 * 0.80 * N = 0.76 * N.
- Winner got 60% of valid votes, rival got 40% -> Margin = (60% - 40%) = 20% of valid votes.
- Therefore, 0.20 * (0.76 * N) = 1,520 => 0.152 * N = 1,520 => N = 1,520 / 0.152 = 10,000 registered voters.`,
            tags: ['Focus Writing', 'Translation', 'Election Math', 'NID'],
            marks: 50,
            difficulty: 'Medium'
          }
        ]
      },
      {
        id: 'sec-ec-tech',
        name: 'Part 2: 6. Subject Related Questions (6.1–6.6) — 150 Marks',
        marks: 150,
        description: 'Official Part 2: Subject Related CSE/IT Questions for Election Commission Assistant Programmer.',
        questions: [
          {
            id: 'q-ec-1',
            questionNo: '6.1',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'The National Voter Database stores records of over 120 million citizens. Discuss how Composite Range-Hash Partitioning can be applied to optimize query performance when searching by Administrative Division/District and by 10/17-digit NID Number.',
            solution: `- Primary Range Partitioning by Division/District enables Partition Pruning for regional voter roll queries (scanning only 1/8th of blocks).
- Secondary Hash Sub-partitioning on hash(NID) distributes I/O evenly across storage nodes and supports sub-millisecond 1:1 e-KYC verification lookups via a Global Unique B+ Tree Index on NID.`,
            tags: ['Database Partitioning', 'Large Scale Systems', 'Election Commission'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-ec-2',
            questionNo: '6.2',
            type: 'descriptive',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Explain Automated Fingerprint Identification Systems (AFIS). Describe Minutiae Extraction (Ridge Endings and Bifurcations) and how 1:N Biometric Deduplication prevents duplicate voter registration.',
            solution: `- Minutiae Extraction encodes ridge endings and bifurcations as coordinate vectors (x, y, theta, type).
- 1:N Deduplication uses two-stage filtering: pattern-level bucketing (Loop, Whorl, Arch) followed by GPU-accelerated geometric point-pattern matching across all 10 fingers to block duplicate NID issuance.`,
            tags: ['Biometrics', 'AFIS', 'Algorithms', 'Election Commission'],
            marks: 25,
            difficulty: 'Hard'
          },
          {
            id: 'q-ec-3',
            questionNo: '6.3',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Consider tables: Voter(VoterID, NID, Name, PollingCenterID, Age) and PollingCenter(CenterID, CenterName, UpazilaID, Capacity). Write SQL queries to: (a) Identify Polling Centers where total assigned voters exceed Capacity by more than 10%, and (b) Find the average voter age per center.',
            solution: 'Uses INNER JOIN with GROUP BY and HAVING COUNT(v.VoterID) > (pc.Capacity * 1.10).',
            codeSolution: `-- (a) Polling Centers exceeding capacity by > 10%
SELECT 
    pc.CenterID,
    pc.CenterName,
    pc.Capacity,
    COUNT(v.VoterID) AS Assigned_Voters
FROM PollingCenter pc
JOIN Voter v ON pc.CenterID = v.PollingCenterID
GROUP BY pc.CenterID, pc.CenterName, pc.Capacity
HAVING COUNT(v.VoterID) > (pc.Capacity * 1.10);

-- (b) Average voter age per Polling Center
SELECT pc.CenterID, pc.CenterName, ROUND(AVG(v.Age), 1) AS Avg_Age
FROM PollingCenter pc
JOIN Voter v ON pc.CenterID = v.PollingCenterID
GROUP BY pc.CenterID, pc.CenterName;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'HAVING', 'Election Commission'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-ec-4',
            questionNo: '6.4',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Describe the security architecture of Electronic Voting Machines (EVMs). Why are EVMs air-gapped and how do One-Time Programmable (OTP) microcontrollers prevent firmware tampering?',
            solution: `- Air-Gapped Design: Complete absence of Wi-Fi, Bluetooth, radio, or Ethernet interfaces eliminates remote network attack vectors.
- OTP Microcontrollers: Firmware machine code is permanently burned at manufacture and physically cannot be reflashed or altered in the field.`,
            tags: ['Cybersecurity', 'EVM', 'Embedded Security'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-ec-5',
            questionNo: '6.5',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a Python function to validate a Bangladeshi National ID (NID) number supporting both 10-digit Smart NID and 17-digit birth-year-prefixed NID.',
            solution: 'Checks numeric characters and verifies length == 10 or (length == 17 with valid 4-digit birth year prefix).',
            codeSolution: `def validate_bangladesh_nid(nid_str: str) -> bool:
    cleaned = nid_str.strip()
    if not cleaned.isdigit():
        return False
    if len(cleaned) == 10:
        return True
    if len(cleaned) == 17:
        birth_year = int(cleaned[:4])
        return 1900 <= birth_year <= 2026
    return False`,
            solutionLanguage: 'python',
            tags: ['Python', 'NID Validation'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-ec-6',
            questionNo: '6.6',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Explain the technical and privacy architecture of the NID Verification Gateway API used by banks and MFS providers for e-KYC onboarding.',
            solution: `- Banks connect to the NID Verification Gateway over dedicated IPsec VPN / leased lines using mutual TLS (mTLS) client certificates.
- For biometric e-KYC, the bank captures the customer's ISO fingerprint minutiae template and submits NID + DOB + encrypted template; the gateway returns a signed MATCH/NO-MATCH response without exposing raw biometric database templates.`,
            tags: ['e-KYC', 'NID Gateway', 'API Security'],
            marks: 25,
            difficulty: 'Medium'
          }
        ]
      }
    ]
  },

  // 6. National Board of Revenue (NBR) & Ministry of Finance Assistant Programmer
  {
    id: 'ap-nbr-finance',
    title: 'Assistant Programmer, National Board of Revenue (NBR) & Ministry of Finance',
    searchQuery: 'National Board of Revenue NBR Assistant Programmer written question solution pdf',
    category: 'Ministry Assistant Programmer',
    jobId: 'NBR-AP-2024',
    circularYear: '2023-2024',
    examDate: 'October 21, 2024',
    examBody: 'BPSC',
    participatingBanks: ['National Board of Revenue (NBR)', 'Ministry of Finance (iBAS++)'],
    ministryOrDepartment: 'Internal Resources Division, Ministry of Finance',
    grade: 'Grade 9',
    totalMarks: 200,
    duration: '2 Hours (120 Minutes)',
    examType: 'Written Exam (Official BPSC Format — 200 Marks)',
    summary: 'Official BPSC Written Examination for Assistant Programmer at NBR and Ministry of Finance. Covers Part 1 (Focus Writing, Translation & Tax Math — 50 Marks) and Part 2 (Subject Related CSE/IT Questions 6.1–6.6: Progressive Income Tax Slab Algorithm, SQL Window Functions for Top Taxpayers per Zone, ASYCUDA World Customs Architecture, e-Return Portal Security, and 3NF/BCNF Normalization — 150 Marks).',
    keyTopics: [
      'Progressive Income Tax Slab Algorithm',
      'SQL DENSE_RANK Top Taxpayers per Zone',
      'ASYCUDA World & iBAS++ Architecture',
      'e-Return Portal MFA & Audit Security',
      'Database Normalization (1NF to BCNF)',
      'Automated Customs Duty Calculation'
    ],
    sections: [
      {
        id: 'sec-nbr-nontech',
        name: 'Part 1: Focus Writing, Translation & Analytical Math (Questions 1–5) — 50 Marks',
        marks: 50,
        description: 'Official Part 1: Bangla & English Focus Writing, Translation, and Analytical Math (50 Marks).',
        questions: [
          {
            id: 'q-nbr-7',
            questionNo: '1 – 5',
            type: 'descriptive',
            topicCategory: 'Focus Writing & Language',
            questionText: `1. Focus Writing in Bangla (10 Marks): রাজস্ব আহরণ বৃদ্ধি ও কর ব্যবস্থাপনার আধুনিকায়নে ই-রিটার্ন (e-Return) এবং অ্যাসাইকুডা ওয়ার্ল্ড (ASYCUDA World)-এর ভূমিকা।
2. Focus Writing in English (10 Marks): "Automating Revenue Administration: The Economic Impact of e-TIN, e-Return, and Electronic Fiscal Devices (EFD)."
3. Translate into English (10 Marks): "অনলাইন আয়কর রিটার্ন দাখিলের সুবিধা চালু হওয়ায় করদাতারা ঘরে বসেই দ্রুত কর পরিশোধ করতে পারছেন। এর ফলে রাজস্ব আদায়ে গতিশীলতা এসেছে এবং সরকারি কার্যক্রমে স্বচ্ছতা নিশ্চিত হয়েছে।"
4. Translate into Bangla (10 Marks): "Integrated Budget and Accounting System (iBAS++) has brought real-time fiscal discipline to government expenditure management."
5. Analytical Math (10 Marks): After paying an income tax of 15% on total income above Taka 3,50,000, a taxpayer's net take-home annual income is Taka 7,75,000. Find the taxpayer's gross annual income.`,
            solution: `1–4. Translation Solutions:
- English Translation (Q3): "With the introduction of online income tax return filing facilities, taxpayers can pay taxes quickly from home. As a result, revenue collection has gained momentum and transparency in government operations has been ensured."
- Bangla Translation (Q4): "ইন্টিগ্রেটেড বাজেট অ্যান্ড অ্যাকাউন্টিং সিস্টেম (iBAS++) সরকারি ব্যয় ব্যবস্থাপনায় রিয়েল-টাইম আর্থিক শৃঙ্খলা নিয়ে এসেছে।"

5. Analytical Math Solution:
- Let gross annual income = Taka X (where X > 3,50,000).
- Tax paid = 15% of (X - 3,50,000) = 0.15 * (X - 3,50,000).
- Net income = X - 0.15 * (X - 3,50,000) = 7,75,000
  => 3,50,000 + 0.85 * (X - 3,50,000) = 7,75,000
  => 0.85 * (X - 3,50,000) = 4,25,000
  => X - 3,50,000 = 4,25,000 / 0.85 = 5,00,000
  => X = 8,50,000.
Answer: Gross annual income is Taka 8,50,000.`,
            tags: ['Focus Writing', 'Translation', 'Tax Math', 'NBR'],
            marks: 50,
            difficulty: 'Easy'
          }
        ]
      },
      {
        id: 'sec-nbr-tech',
        name: 'Part 2: 6. Subject Related Questions (6.1–6.6) — 150 Marks',
        marks: 150,
        description: 'Official Part 2: Subject Related CSE/IT Questions for NBR & Ministry of Finance Assistant Programmer.',
        questions: [
          {
            id: 'q-nbr-1',
            questionNo: '6.1',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a Python program to calculate progressive individual income tax in Bangladesh based on the slabs: First BDT 3,50,000 @ 0%, Next BDT 1,00,000 @ 5%, Next BDT 3,00,000 @ 10%, Next BDT 4,00,000 @ 15%, Next BDT 5,00,000 @ 20%, and Remaining balance @ 25%.',
            solution: 'Iterates sequentially through the slab tuples (slab_limit, rate), deducting taxable_in_slab = min(remaining, slab_limit) at each step.',
            codeSolution: `def calculate_bd_income_tax(taxable_income: float) -> float:
    slabs = [
        (350000.0, 0.00),
        (100000.0, 0.05),
        (300000.0, 0.10),
        (400000.0, 0.15),
        (500000.0, 0.20),
        (float('inf'), 0.25)
    ]
    remaining = max(0.0, taxable_income)
    total_tax = 0.0
    for limit, rate in slabs:
        if remaining <= 0:
            break
        chunk = min(remaining, limit)
        total_tax += chunk * rate
        remaining -= chunk
    return round(total_tax, 2)`,
            solutionLanguage: 'python',
            tags: ['Python', 'Tax Slab Algorithm', 'NBR'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-nbr-2',
            questionNo: '6.2',
            type: 'sql',
            topicCategory: 'Database & SQL',
            questionText: 'Given table TaxReturn(ReturnID, TIN, TaxZone, AssessmentYear, TotalIncome, TaxPaid), write an SQL query using Window Functions to find the Top 2 highest taxpayers in each TaxZone for Assessment Year \'2024-2025\'.',
            solution: 'Uses DENSE_RANK() OVER (PARTITION BY TaxZone ORDER BY TaxPaid DESC) inside a CTE.',
            codeSolution: `WITH RankedTaxpayers AS (
    SELECT 
        TaxZone,
        TIN,
        TotalIncome,
        TaxPaid,
        DENSE_RANK() OVER (
            PARTITION BY TaxZone 
            ORDER BY TaxPaid DESC
        ) AS rank_in_zone
    FROM TaxReturn
    WHERE AssessmentYear = '2024-2025'
)
SELECT TaxZone, TIN, TotalIncome, TaxPaid
FROM RankedTaxpayers
WHERE rank_in_zone <= 2
ORDER BY TaxZone, rank_in_zone;`,
            solutionLanguage: 'sql',
            tags: ['SQL', 'DENSE_RANK', 'NBR'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-nbr-3',
            questionNo: '6.3',
            type: 'descriptive',
            topicCategory: 'Software Engineering',
            questionText: 'Explain the architecture of ASYCUDA World used by Bangladesh Customs and how it integrates with Bangladesh Bank RTGS and A-Challan for real-time customs duty settlement.',
            solution: `- ASYCUDA World processes electronic Cargo Manifests and Bills of Entry (B/E), automatically computing CD, SD, VAT, AIT, and AT based on HS Code tariff schedules.
- Integrates via secure XML/REST APIs with Bangladesh Bank's RTGS and A-Challan (Automated Challan System) so that once an importer pays duty at any scheduled bank or via online banking, the payment confirmation immediately releases the customs clearance order.`,
            tags: ['ASYCUDA World', 'A-Challan', 'RTGS', 'NBR'],
            marks: 25,
            difficulty: 'Medium'
          },
          {
            id: 'q-nbr-4',
            questionNo: '6.4',
            type: 'descriptive',
            topicCategory: 'Networking & Security',
            questionText: 'Describe the defense-in-depth security controls required for the National e-Return portal (etaxnbr.gov.bd) to handle high concurrency during the November tax deadline while preventing data breaches.',
            solution: `- Security Controls: TLS 1.3 encryption, NID-bound biometric SIM OTP Multi-Factor Authentication, Web Application Firewall (WAF) & DDoS rate-limiting at the edge, bcrypt password hashing, and append-only cryptographic audit logs.
- High-Concurrency Scalability: Load-balanced stateless application pods, Redis session/OTP caching, and read-replica database clusters.`,
            tags: ['Cybersecurity', 'e-Return', 'High Concurrency', 'NBR'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-nbr-5',
            questionNo: '6.5',
            type: 'descriptive',
            topicCategory: 'Database & SQL',
            questionText: 'Define 1NF, 2NF, 3NF, and BCNF with a taxpayer assessment schema example.',
            solution: `- 1NF: Atomic column values and unique primary key.
- 2NF: No partial dependency of non-prime attributes on a composite candidate key.
- 3NF: No transitive dependency between non-prime attributes.
- BCNF: For every non-trivial FD X -> Y, X is a superkey.`,
            tags: ['DBMS', 'Normalization', 'NBR'],
            marks: 25,
            difficulty: 'Easy'
          },
          {
            id: 'q-nbr-6',
            questionNo: '6.6',
            type: 'coding',
            topicCategory: 'Programming & Algorithms',
            questionText: 'Write a Python function to compute the total assessable value, customs duty, and grand total from a list of imported line items.',
            solution: 'Iterates through line items computing item_val = qty * unit_price and duty = item_val * (duty_pct / 100).',
            codeSolution: `def compute_customs_invoice(line_items: list) -> dict:
    total_val = sum(i['qty'] * i['unit_price'] for i in line_items)
    total_duty = sum(i['qty'] * i['unit_price'] * (i['duty_pct'] / 100.0) for i in line_items)
    return {
        "total_goods_value": round(total_val, 2),
        "total_customs_duty": round(total_duty, 2),
        "grand_total_payable": round(total_val + total_duty, 2)
    }`,
            solutionLanguage: 'python',
            tags: ['Python', 'Customs Calculation', 'NBR'],
            marks: 25,
            difficulty: 'Easy'
          }
        ]
      }
    ]
  }
];
