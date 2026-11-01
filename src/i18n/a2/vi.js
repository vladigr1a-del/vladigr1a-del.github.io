export const a2 = {
  path: { a2_shop: 'Trong cửa hàng', a2_weather: 'Thời tiết và các mùa', a2_move: 'Hỏi đường', a2_time: 'Giờ giấc trong ngày', a2_clothes: 'Màu sắc và quần áo', a2_health: 'Ở chỗ bác sĩ' },
  words: {
    a2_shop: ['cửa hàng', 'bánh mì', 'phô mai', 'quả táo', 'giá', 'rẻ', 'đắt', 'tôi cần', 'tôi tìm', 'quầy thanh toán', 'túi', 'khuyến mãi', 'to', 'nhỏ'],
    a2_weather: ['thời tiết', 'mặt trời', 'mưa', 'tuyết', 'gió', 'lạnh', 'ấm', 'nóng', 'nhiều mây', 'mùa xuân', 'mùa hè', 'mùa thu', 'mùa đông', 'độ'],
    a2_move: ['xe buýt', 'tàu hỏa', 'trạm dừng', 'nhà ga', 'vé', 'bên phải', 'bên trái', 'đi thẳng', 'đường phố', 'bản đồ', 'ở đâu', 'gần', 'xa', 'đi bộ'],
    a2_time: ['đồng hồ / giờ', 'buổi sáng', 'ban ngày', 'buổi tối', 'ban đêm', 'hôm nay', 'ngày mai', 'hôm qua', 'tôi thức dậy', 'tôi ăn', 'tôi ngủ', 'ở chỗ làm', 'rưỡi', 'phút'],
    a2_clothes: ['màu đỏ', 'màu xanh dương', 'màu xanh lá', 'màu vàng', 'màu đen', 'màu trắng', 'áo khoác', 'quần dài', 'áo sơ mi', 'giày', 'mũ', 'găng tay', 'tất', 'váy liền'],
    a2_health: ['bác sĩ', 'hiệu thuốc', 'thuốc', 'sốt', 'cảm cúm', 'đau đầu', 'bụng', 'bàn tay', 'chân', 'đầu', 'đau', 'khỏe mạnh', 'lịch hẹn khám', 'sự giúp đỡ'],
  },
  missions: {
    a2_shop: {
      steps: [
        { partnerTr: 'Xin chào! Tôi giúp gì được cho bạn?', prompt: 'Hãy nói rằng bạn đang tìm sữa.', optionsTr: ['Tôi đang tìm sữa.', 'Tôi là cà phê.', 'Chúc ngủ ngon.'], hint: 'Hãy nói với nhân viên bạn tìm gì.', wordTr: 'tôi tìm' },
        { partnerTr: 'Bạn có cần túi không?', prompt: 'Hãy nói “vâng, cảm ơn”.', optionsTr: ['Xin lỗi.', 'Vâng, cảm ơn.', 'Chúc ngủ ngon.'], hint: 'Ta cần câu trả lời “vâng, cảm ơn”.', wordTr: 'túi' },
        { partnerTr: 'Bạn cần gì?', prompt: 'Sắp xếp các từ. Hãy nói “Tôi cần bánh mì và phô mai”.', blocksTr: ['1. Tôi cần', '2. bánh mì', '3. và', '4. phô mai'], pattern: 'Mẫu: tôi cần + cái gì. Sau “tarvitsen”, từ có đuôi mới: leipä (bánh mì) thành leipää, juusto thành juustoa. Gọi là “partitive”: “một ít cái gì đó”.', wordTr: 'tôi cần' },
        { partnerTr: 'Đây là quả táo.', prompt: 'Hãy hỏi cái này giá bao nhiêu.', targetTr: 'Cái này giá bao nhiêu?', wordTr: 'giá' },
      ],
      can: ['nói bạn tìm gì trong cửa hàng', 'nói bạn cần gì', 'hỏi giá một món đồ'],
    },
    a2_move: {
      steps: [
        { partnerTr: 'Xin lỗi, nhà ga ở đâu ạ?', prompt: 'Hãy chỉ đường: đi thẳng rồi rẽ phải.', optionsTr: ['Đi thẳng rồi rẽ phải.', 'Tôi muốn một ly cà phê.', 'Chúc ngủ ngon.'], hint: 'Bạn đang chỉ đường.', wordTr: 'đi thẳng' },
        { partnerTr: 'Nhà ga có xa không?', prompt: 'Hãy nói là gần.', optionsTr: ['Chào buổi sáng.', 'Không, ở gần thôi.', 'Cái này giá năm euro.'], hint: 'Ta muốn nói nhà ga không xa.', wordTr: 'gần' },
        { partnerTr: 'Đi đến trạm dừng thế nào?', prompt: 'Sắp xếp các từ. Hãy nói “Đi thẳng rồi rẽ phải”.', blocksTr: ['1. Đi thẳng', '2. và', '3. sau đó', '4. bên phải'], pattern: 'Mẫu: hướng + và sau đó + hướng. Đuôi “-lle” nghĩa là “về phía”: oikea (phải) thành oikealle.', wordTr: 'bên phải' },
        { partnerTr: 'Bạn muốn mua vé không?', prompt: 'Hãy nói to: “Cho một vé, cảm ơn”.', targetTr: 'Cho một vé, cảm ơn.', wordTr: 'vé' },
      ],
      can: ['chỉ đường đơn giản', 'nói một nơi gần hay xa', 'xin mua vé'],
    },
    a2_time: {
      steps: [
        { partnerTr: 'Mấy giờ rồi?', prompt: 'Hãy nói là tám giờ.', optionsTr: ['Tám giờ rồi.', 'Tôi sống ở Phần Lan.', 'Cảm ơn rất nhiều.'], hint: 'Họ hỏi giờ.', wordTr: 'đồng hồ / giờ' },
        { partnerTr: 'Bạn thức dậy lúc mấy giờ?', prompt: 'Hãy nói bạn thức dậy lúc sáu giờ sáng.', optionsTr: ['Hôm nay trời lạnh.', 'Tôi thức dậy lúc sáu giờ sáng.', 'Tạm biệt.'], hint: 'Họ hỏi về buổi sáng của bạn.', wordTr: 'tôi thức dậy' },
        { partnerTr: 'Ngày mai bạn làm gì?', prompt: 'Sắp xếp các từ. Hãy nói “Ngày mai tôi ở chỗ làm”.', blocksTr: ['1. Ngày mai', '2. tôi', '3. ở chỗ làm'], pattern: 'Mẫu: khi nào + tôi + ở đâu. Trong tiếng Phần Lan, động từ luôn đứng thứ hai, dù từ chỉ thời gian đứng đầu.', wordTr: 'ở chỗ làm' },
        { partnerTr: 'Khi nào bạn đi ngủ?', prompt: 'Hãy nói to: “Tôi đi ngủ vào buổi tối”.', targetTr: 'Tôi đi ngủ vào buổi tối.', wordTr: 'buổi tối' },
      ],
      can: ['nói mấy giờ rồi', 'nói bạn thức dậy lúc nào', 'nói ngày mai bạn làm gì'],
    },
    a2_health: {
      steps: [
        { partnerTr: 'Xin chào! Bạn bị làm sao?', prompt: 'Hãy nói bạn bị sốt.', optionsTr: ['Tôi bị sốt.', 'Tôi muốn một ly cà phê.', 'Rất vui được gặp bạn.'], hint: 'Bác sĩ hỏi vấn đề của bạn.', wordTr: 'sốt' },
        { partnerTr: 'Bạn có bị đau đầu không?', prompt: 'Hãy nói “vâng, tôi bị đau đầu”.', optionsTr: ['Cảm ơn rất nhiều.', 'Vâng, tôi bị đau đầu.', 'Chúc ngủ ngon.'], hint: 'Ta cần câu trả lời “vâng”.', wordTr: 'đau đầu' },
        { partnerTr: 'Bạn đau ở đâu?', prompt: 'Sắp xếp các từ. Hãy nói “Bụng tôi đau”.', blocksTr: ['1. Bụng của tôi', '2. thì', '3. đau'], pattern: 'Mẫu: bộ phận cơ thể của tôi + đau. Đuôi “-ni” nghĩa là “của tôi”: vatsa (bụng) thành vatsani.', wordTr: 'bụng' },
        { partnerTr: 'Bạn có cần đặt lịch khám không?', prompt: 'Hãy nói to: “Tôi muốn đặt lịch khám bác sĩ”.', targetTr: 'Tôi muốn đặt lịch khám bác sĩ.', wordTr: 'lịch hẹn khám' },
      ],
      can: ['nói bạn bị sốt hoặc đau đầu', 'nói bạn đau ở đâu', 'đặt lịch khám bác sĩ'],
    },
  },
};
